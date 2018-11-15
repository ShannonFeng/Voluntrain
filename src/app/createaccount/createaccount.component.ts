import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  signupForm; 

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder, private auth:AuthService, private router:Router) {
    this.signupForm = formBuilder.group({
      name: '',
      email: '',
      zipcode: '',
      password: ''
    });
  }

  submit() {
    var name = this.signupForm.value.name;
    var email = this.signupForm.value.email;
    var zipcode = this.signupForm.value.zipcode;
    var password = this.signupForm.value.password;

    this.auth.createAccount(name, email, zipcode, password).subscribe(data => {
      if (data.success) {
        window.alert(data.message);   // notify user that account creation successful
        this.router.navigate(['/']);  // redirect to home
      } else {
        window.alert(data.message);   // otherwise display error msg to user
      }
    });  
  }
}
