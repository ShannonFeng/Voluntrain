import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      username: '',
      password: ''
    });
  }

  submit() {
    console.log("on submit function");
    this.http.request("GET", "http://localhost:3000/test").subscribe(
      data => { 
        console.log("here");
      },
      err => {
        console.log("there was an error")
      },
      () => console.log("done")
    );
    
    /*
    //extract data
    console.log(this.loginForm.value);
    //const result: loginInfo = Object.assign({}, this.loginForm.value);
    //result.username = Object.assign({}, result.)
    //simple debug
    window.alert('Welcome ' + this.loginForm.value.username + '!');
    */
  }


}
