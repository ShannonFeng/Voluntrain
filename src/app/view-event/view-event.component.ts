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

  lat = 43.0746953;
  lng = -89.3841695;
  zoom = 14;
  
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
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventsService.getEvent(this.eventId).subscribe(result => {
      this.event = result;
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

  signUp() {
    this.auth.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.user.getData().subscribe(info => {
          var email = info.email;
          this.auth.signUp(email, this.eventId).subscribe(result => {
            window.alert("Successfully signed up for event!")
            //this.ngOnInit();
          })
        });
      }
      else {
        window.alert("Unable to sign up for event. User must be logged in.")
      }
    })
  }
}