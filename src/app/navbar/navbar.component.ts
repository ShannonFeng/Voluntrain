import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$;
  user$; 

  constructor(private auth:AuthService, private userService:UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
    this.user$ = this.userService.currentUser;
  }

  onLogout() {
    this.auth.logout();
  }
 
}
