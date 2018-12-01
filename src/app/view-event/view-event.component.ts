import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from '../event';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  event: Event;
  lat = 43.0746953;
  lng = -89.3841695;
  zoom = 14;
  
  constructor(private eventsService : EventService, private activatedRoute: ActivatedRoute) { }

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
  ngOnInit() {
    this.getLocation();
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventsService.getEvent(id).subscribe(result => {
      this.event = result;
    });
  }

}