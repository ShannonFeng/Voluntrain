import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  constructor() { }

  eventName;
  address;
  volunteers;

  ngOnInit() {
    this.eventName = "Event1";
    this.address = "1234"; 
    this.volunteers = ["Bob", "Catherine", "Dan"];
  }



}