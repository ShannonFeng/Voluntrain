import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrgService } from '../org.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['./org-profile.component.css']
})
export class OrgProfileComponent implements OnInit {

  orgId;
  org;
  org_events;
  userIsOrgAdmin = false;

  constructor(private activatedRoute: ActivatedRoute, 
    private orgService:OrgService, 
    private userService:UserService,
    private auth:AuthService
    ) { }

  ngOnInit() {
    this.orgId = this.activatedRoute.snapshot.paramMap.get('id');
    this.orgService.getOrg(this.orgId).subscribe(data => {
      this.org = data;
      this.checkIfUserIsAdmin();

      this.orgService.getOrgEvents(this.org._id).subscribe(data => {
        this.org_events = data;
      });
    })
  }

  checkIfUserIsAdmin() {
    this.auth.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.userService.currentUser.subscribe(user => {
          if (this.org.admin === user.email ) {
            this.userIsOrgAdmin = true;
          }
        })
      }
    })
  }

}
