import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ActivatedRoute } from '@angular/router';

import { Org } from '../org';
import { OrgService} from '../org.service';
import { Event }         from '../event';
import { EventService }  from '../event.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-org',
  templateUrl: './view-org.component.html',
  styleUrls: ['./view-org.component.css']
})
export class ViewOrgComponent implements OnInit {

  org: Org;
  events: Event[];
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private orgService: OrgService,
    private auth:AuthService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.getOrgByID();
    this.getEvents();
  }

  getOrgByID(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.orgService.getOrgByID(id)
      .subscribe(org => this.org = org);
  }
  getEvents(): void{
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  //todo: redirect to createEvent form component...
  createEvent(orgID){
    this.router.navigate(['create-event']);
    console.log('Org that is calling this function is ' + orgID);
  }

}
