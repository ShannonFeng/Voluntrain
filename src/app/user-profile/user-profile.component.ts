import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user;
  userEvents;
  userOrgs;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(info => {
      this.user = info;
      if (this.user.isOrgAdmin) {
        this.userService.getUserOrgs().subscribe(orgs => {
          this.userOrgs = orgs;
        })
      }
    });
    this.userService.getEventsSignedUp().subscribe(events => {
      this.userEvents = events;
    })
  }
}
