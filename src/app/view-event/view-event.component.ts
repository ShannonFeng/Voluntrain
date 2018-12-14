import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  event;
  eventId;
  

  lat;
  lng;
  zoom = 13;
  ulat;
  ulng;
  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.ulng = position.coords.longitude;
          this.ulat = position.coords.latitude;
        });
    } else {
       console.log("No support for geolocation");
       this.ulng =-89.3841695;
       this.ulat =43.0746953;
    }
  }
  constructor(private eventsService : EventService, 
    private activatedRoute: ActivatedRoute, 
    private dialog:DialogComponent,
    private auth:AuthService,
    private user:UserService) { }

  ngOnInit() {
    this.getLocation();
    this.getEventInfo();
  }

  getEventInfo() {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventsService.getEvent(id).subscribe(result => {
      this.event = result;
      this.lat = <number>this.event.lat;
      this.lng = <number>this.event.lng;

      console.log(this.event.lat);
      console.log(this.event.lng);
      
    });
  }

  

  signUp() {
    this.user.getData().subscribe(user => {
      if (user.isLoggedIn) {
        var email = user.email;
        this.auth.signUp(email, this.eventId).subscribe(result => {
          window.alert(result.message)
          this.ngOnInit();
        });
      }
      else {
        window.alert("Unable to sign up for event. User must be logged in.")
      }
    })
  }
}