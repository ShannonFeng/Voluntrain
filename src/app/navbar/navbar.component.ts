import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;

  constructor(private router:Router, private auth:AuthService, private User:UserService) { 
    this.auth.getLoginStatus.subscribe(status => this.changeLoginStatus(status));
  }

  ngOnInit() {
    
  }
 
  private changeLoginStatus(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }

}
