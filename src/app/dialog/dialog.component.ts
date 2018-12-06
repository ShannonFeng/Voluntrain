import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css'],
  })
  export class DialogComponent {
    constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {
        //setTimeout(() => this.dialog.open(DialogComponentDialog))
    }

    signUpForm;   // will be used for FormGroup instance

    ngOnInit() {
      this.signUpForm = this.formBuilder.group({
        name: this.formBuilder.control('', Validators.required),
        email: this.formBuilder.control('', Validators.compose([
          Validators.required,
          Validators.email
        ])),
        password: this.formBuilder.control('', Validators.required),
        zipcode: this.formBuilder.control('', Validators.required)
      });
    }
    
    openDialog() {
      const dialogRef = this.dialog.open(DialogComponentDialog);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    submit() {
      console.log(this.signUpForm.name.value);
    }
  } 

  @Component({
    selector: 'dialogg',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css']
  })
  export class DialogComponentDialog {}