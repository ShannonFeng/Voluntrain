import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Event }         from '../event';
import { EventService }  from '../event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  @Input() event: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
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

}
