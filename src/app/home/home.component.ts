import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;
  name: String = "";
  email: String = "";
  zip: Number = 0;

  constructor(private user:UserService, private auth:AuthService) { }

  ngOnInit() {
    this.user.getData().subscribe(data => {
      if(data.isLoggedIn) {
        this.auth.setLoggedIn(true);
        this.isLoggedIn = true;
        this.name = data.name;
        this.email = data.email;
        this.zip = data.zip;
      } 
      else {
        this.auth.setLoggedIn(false);
        this.isLoggedIn = false;
        console.log("No user is currently logged in.");
      }
    })
  }

}
