import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat = 43.0746953;
  lng = -89.3841695;
  zoom = 14;

  list : Array<String> = ["A", "b", 'asdf']
  isLoggedIn: boolean = false;
  name: String = "";
  email: String = "";
  zipcode: Number = 0;

  results: Array<Object> = [];

  constructor(private user:UserService, private auth:AuthService, private eventService:EventService) { }

  ngOnInit() {
    this.user.getData().subscribe(data => {
      if(data.isLoggedIn) {
        this.auth.setLoggedIn(true);
        this.isLoggedIn = true;
        this.name = data.name;
        this.email = data.email;
        this.zipcode = data.zipcode;
        console.log(this.name + " is currently logged in.");
      } 
      else {
        this.auth.setLoggedIn(false);
        this.isLoggedIn = false;
        console.log("No user is currently logged in.");
      }
    })
  }

  searchEvents(event: any) {
    var input = event.target.value;
    if (input != "") {
      this.eventService.searchEvents(input).subscribe(result => {
        this.results = result;
      });
    }
    else {
      this.results = [];
    }
    
  }

}
