import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  eventName: String = ""; 
  eventDescription: String =""; 
  signUpList: Array<String> = ["user1","user2","user3"];


  constructor() { }

  ngOnInit() {
  }

}