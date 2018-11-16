import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { 
    
  }

  ngOnInit() {
    this.auth.logout().subscribe(data => {
      if(data.success) {
        this.router.navigate(['/']);
        this.auth.setLoggedIn(false);
      } else {
        window.alert('A problem occured while logging out.')
      }
    })
  }

}
