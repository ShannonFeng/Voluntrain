import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent implements OnInit {
  orgform; 

  constructor(private formBuilder: FormBuilder, private router:Router, private Auth: AuthService) {
    this.orgform = this.formBuilder.group({
      name: '',
      location: '', 
      zipcode: '',
      bio: ''
    });
  }

  ngOnInit() {
  }

  submit() {
    var name = this.orgform.value.name;
    var location = this.orgform.value.location;
    var zip = this.orgform.value.zipcode;
    var bio = this.orgform.value.bio;

    this.Auth.createOrg(name, location, zip, bio).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/']);  // redirect to home
      }
      window.alert(data.message);
    })
  }

}
