import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  signupForm; 

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.signupForm = formBuilder.group({
      name: '',
      date: '',
      location: '',
      description: ''
    });
  }

  submit() {
    console.log("On signup")

    const params = new HttpParams()
    .set('name', this.signupForm.value.name)
    .set('date', this.signupForm.value.email)
    .set('location', this.signupForm.value.zipcode)
    .set('description', this.signupForm.value.password);

    this.http.get("http://localhost:3000/createaccount", {params}).subscribe (
      data => { 
        console.log("here");
      },
      err => {
        console.log("there was an error")
      },
      () => console.log("done")
    )
  }
}
