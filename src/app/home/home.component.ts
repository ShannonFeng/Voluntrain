import { Component, OnInit, OnDestroy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { LayoutModule } from '@angular/cdk/layout';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Voluntrain Event  ${i + 1}`);
  
  private _mobileQueryListener: () => void;


  list : Array<String> = ["A", "b", 'asdf']
  isLoggedIn: boolean = false;
  name: String = "";
  email: String = "";
  zipcode: Number = 0;
  
  results: Array<evnt> = [];
  markers: marker[] = [];

	 

  lat = 43.0746953;
  lng = -89.3841695;
  zoom = 14;

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.markers[0] = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            label: 'You',
          };
          
          this.lng = position.coords.longitude;
          this.lat = position.coords.latitude;
        });
    } else {
      this.markers[0] = {
       lng: -89.3841695,
       lat: 43.0746953,
      };
      this.lat = 43.0746953;
      this.lng = -89.3841695;
    }
  }

  constructor(private user:UserService, private auth:AuthService, private eventService:EventService,
              changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    //this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //this.mobileQuery.addListener(this._mobileQueryListener);
    
  }

  mapClicked() {

    for(var i = 0; i <this.results.length; i++){
      this.markers.push({
        lat: this.results[i].lat,
        lng: this.results[i].long,
        label: this.results[i].event_name,
    });
  }
  }

  ngOnInit() {
    this.getLocation();
    this.user.getData().subscribe(data => {
      if(data.isLoggedIn) {
        this.auth.setLoggedIn(true);
        this.isLoggedIn = true;
        this.name = data.name;
        this.email = data.email;
        this.zipcode = data.zipcode;
        console.log(this.name + " is currently logged in.");
      } 
      else {
        this.auth.setLoggedIn(false);
        this.isLoggedIn = false;
        console.log("No user is currently logged in.");
      }
    })
    
  }
   
  searchEvents(event: any) {
    var input = event.target.value;
    if (input != "") {
      this.eventService.searchEvents(input).subscribe(result => {
        this.results = result;
        this.mapClicked();
      });
    }
    else {
      this.results = [];
    }
    
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
interface marker {
	lat: number;
	lng: number;
	label?: String;
}
interface evnt {
  _id: String;
  event_name: String;
  description: String;
  signUpList: String[];
  lat: number;
  long: number;
}