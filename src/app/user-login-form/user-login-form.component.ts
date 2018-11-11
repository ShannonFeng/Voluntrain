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

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder, private router:Router, private auth:AuthService, private navbar:NavbarComponent) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
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
