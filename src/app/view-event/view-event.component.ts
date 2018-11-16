
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Event }         from '../event';
import { EventService }  from '../event.service';
import { User }          from '../user';
import { UserService}    from '../user.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
<<<<<<< HEAD

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
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private userService: UserService,
    private location: Location
  ) {
  }

  getEvent(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
  }

  signUp(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    // this.eventService.addParticipant('some@email.com')
    //   .subscribe( event => {
    //     this.event.participant.push('some@email.com')
    //   });
    // this.userService.addEvent(id)
    //   .subscribe( user => {
    //     this.user.eventSignedUp.push(id)
    // });
  }

  ngOnInit() {
    this.getLocation();
    this.getEvent();
    console.log(this.lat,this.lng);
  }
}
