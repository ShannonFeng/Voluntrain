import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent implements OnInit {
  orgform; 

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.orgform = formBuilder.group({
      name: '',
      location: '', 
      zipcode: '',
      bio: ''
    });
  }

  ngOnInit() {
  }

  submit() {
    const params = new HttpParams()
      .set('name', this.orgform.value.name)
      .set('location', this.orgform.value.location)
      .set('zipcode', this.orgform.value.zipcode)
      .set('bio', this.orgform.value.bio);

      console.log(params);
    this.http.get("http://localhost:3000/org-form", {params}).subscribe(
      data => { 
        console.log("Done.");
      },
      err => {
        console.log("Failed to create organization.")
      },
      () => console.log("Successfully created organization.")
    );
  }

}
