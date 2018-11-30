import { Component, OnInit } from '@angular/core';

import { Org } from '../org';
import { OrgService} from '../org.service';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {

  orgs :  Org[];
  selectedOrg: Org;


  constructor(private OrgService: OrgService) { }

  ngOnInit() {
    this.getOrgs();
  }

  onSelect(org: Org): void{
    this.selectedOrg = org;
  }

  getOrgs(): void{
    this.OrgService.getOrgs()
      .subscribe(orgs => this.orgs = orgs);
  }

}
