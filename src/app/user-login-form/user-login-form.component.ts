import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service'

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent {
  loginForm;   // will be used for FormGroup instance

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: '',
      password: ''
    });
  }

  createForm
  onSubmit(){
    //extract data
    console.log(this.loginForm.value);
    //const result: loginInfo = Object.assign({}, this.loginForm.value);
    //result.username = Object.assign({}, result.)
    //simple debug
    window.alert('Welcome ' + this.loginForm.value.username + '!');
  }


}
