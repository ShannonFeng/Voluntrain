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
export class ViewEventComponent implements OnInit {
  @Input() event: Event;
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEvent();
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

}
