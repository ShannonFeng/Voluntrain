// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-view-event',
//   templateUrl: './view-event.component.html',
//   styleUrls: ['./view-event.component.css']
// })
// export class ViewEventComponent implements OnInit {
//
//   constructor() { }
//
//   eventName;
//   address;
//   volunteers;
//
//   ngOnInit() {
//     this.eventName = "Event1";
//     this.address = "1234";
//     this.volunteers = ["Bob", "Catherine", "Dan"];
//   }
//
//
//
// }

import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import{ DialogComponent} from '../dialog/dialog.component';
import { ActivatedRoute } from '@angular/router';

import { Event }         from '../event';
import { EventService }  from '../event.service';
import { UserService}    from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
    private auth:AuthService,
    private router:Router,
    private dialog: DialogComponent
  ) {
  }

  getEvent(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
  }

  signUp() {
    this.userService.getData().subscribe((data) => {
      var isLoggedIn = data.isLoggedIn;
      if (isLoggedIn) {
        var email = data.email;
        var eventId = this.event.id;
        this.auth.signUp(email, eventId).subscribe(data => {
          if (data.success) {
            this.router.navigate(['/']);
          }
          window.alert(data.message);
        });
      }
      else {
        window.alert("Unable to sign up for event. No user is logged in.");
      }
    })
  }

  /*
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
  */

  ngOnInit() {
    this.getLocation();
    this.getEvent();
    console.log(this.lat,this.lng);
  }
}
