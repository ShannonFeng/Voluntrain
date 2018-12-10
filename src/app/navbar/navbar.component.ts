import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$; 

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  onLogout() {
    this.auth.logout();
  }
 
}
