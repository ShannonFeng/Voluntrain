import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private user:UserService, private auth:AuthService) { }

  ngOnInit() {
    this.user.getData().subscribe(data => {
      if(data.isLoggedIn) {
        this.user.setUser(data);
        this.auth.setLoggedIn(true);
        console.log(data.name + " is currently logged in.");
      } 
      else {
        this.auth.setLoggedIn(false);
        console.log("No user is currently logged in.");
      }
    })
  }
}
