import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})

export class ViewEventComponent implements OnInit {
  lat = 43.0746953;
  lng = -89.3841695;
  zoom = 14;
  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.lng = position.coords.longitude;
          this.lat = position.coords.latitude;
        });
    } else {
       console.log("No support for geolocation");
       this.lng =-89.3841695;
       this.lat =43.0746953;
    }
  }
  constructor() { 
  }

  ngOnInit() {  
    this.getLocation();
    console.log(this.lat,this.lng);
  }
  

  
}