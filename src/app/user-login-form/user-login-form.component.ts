import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

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
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.auth.login(email, password).subscribe(data => {
      if (data.success) {
        this.auth.setLoggedIn(true);
        this.router.navigate(['/']);  // redirect to home on successful login
        this.navbar.ngOnInit;
      } else {
        window.alert(data.message);   // otherwise display error msg to user
      }
    });
  }

}
