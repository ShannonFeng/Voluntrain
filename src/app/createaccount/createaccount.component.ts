import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  signupForm;

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder, private auth:AuthService, private router:Router, private app:AppComponent) {
    this.signupForm = formBuilder.group({
      name: formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      email: formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      zipcode: formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      password: formBuilder.control('', Validators.required),
      description: '',
      interests: ''
    });
  }

  submit() {
    var name = this.signupForm.value.name;
    var email = this.signupForm.value.email;
    var zipcode = this.signupForm.value.zipcode;
    var password = this.signupForm.value.password;
    var description = this.signupForm.value.description;
    var interests = this.signupForm.value.interests;

    this.auth.createAccount(name, email, zipcode, password, description, interests).subscribe(data => {
      if (data.success) {
        // notify user that account creation successful
        window.alert(data.message);
        // then log the user in
        this.auth.login(email, password).subscribe(done => {
            this.app.ngOnInit();          // re-initilize to show that user is logged in
            this.router.navigate(['/']);  // redirect to home
        })
      } else {
        window.alert(data.message);   // otherwise display error msg to user
      }
    });
  }
}
