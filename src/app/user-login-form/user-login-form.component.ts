import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent {
  loginForm;   // will be used for FormGroup instance

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: this.formBuilder.control('', Validators.required)
    });

  }

  get email(){
    return this.loginForm.get('email')
  }

  submit() {
    console.log(this.loginForm.value);

    // const params = new HttpParams()
    //   .set('email', this.loginForm.value.email)
    //   .set('password', this.loginForm.value.password);
    //
    // this.http.request("GET", "http://localhost:3000/login", {params}).subscribe(
    //   data => {
    //     console.log("User credentials match.")
    //     data = JSON.parse(JSON.stringify(data))
    //     console.log(data[0].name);
    //   },
    //   err => {
    //     console.log("Failed to login.")
    //   },
    //   () => console.log("Successfully logged in.")
    // );
  }

}
