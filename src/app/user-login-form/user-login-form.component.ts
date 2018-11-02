import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent {
  loginForm;   // will be used for FormGroup instance

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.loginForm = formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit() {
    const params = new HttpParams()
      .set('email', this.loginForm.value.email)
      .set('password', this.loginForm.value.password);

    this.http.request("GET", "http://localhost:3000/login", {params}).subscribe(
      data => { 
        console.log("User credentials match.")
      },
      err => {
        console.log("Failed to login.")
      },
      () => console.log("Successfully logged in.")
    );
  }

}
