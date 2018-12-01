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

  lat = 43.0746953;
  lng = -89.3841695;
  zoom = 14;
  
  constructor(private eventsService : EventService, private activatedRoute: ActivatedRoute, private dialog:DialogComponent) { }

  ngOnInit() {
    this.getLocation();
    this.getEventInfo();
  }

  getEventInfo() {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventsService.getEvent(id).subscribe(result => {
      this.event = result[0];
    });
  }

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

}