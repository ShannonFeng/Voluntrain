import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  event;

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
  constructor(private eventsService : EventService, private activatedRoute: ActivatedRoute, private dialog:DialogComponent) { }

  ngOnInit() {
    this.getLocation();
    this.getEventInfo();
  }

  getEventInfo() {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventsService.getEvent(id).subscribe(result => {
      this.event = result[0];
      this.lat = <number>this.event.lat;
      this.lng = <number>this.event.long;

      console.log(this.event.lat);
      console.log(this.event.long);
      
    });
  }

 

}