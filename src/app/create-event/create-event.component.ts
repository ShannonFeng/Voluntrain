import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrgService } from '../org.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  orgId;
  orgName;
  formInvalid: boolean;

  eventNameFormControl = new FormControl('', [
    Validators.required
  ]);  

  descriptionFormControl = new FormControl('', [
    Validators.required
  ]);  

  constructor(private activatedRoute: ActivatedRoute, private orgService:OrgService, private router:Router,) { }

  ngOnInit() {
    this.orgId = this.activatedRoute.snapshot.paramMap.get('orgId');
    this.orgName = this.activatedRoute.snapshot.paramMap.get('orgName');
    console.log(this.descriptionFormControl);
  }

  submit() {
    if (this.eventNameFormControl.invalid && this.descriptionFormControl.invalid) {
      this.formInvalid = true;
      window.alert("Please make sure all form fields are completed before submitting.");
    }
    else {
      this.formInvalid = false;
      var eventName = this.eventNameFormControl.value;
      var description = this.descriptionFormControl.value
      this.orgService.createEvent(this.orgId, this.orgName, eventName, description).subscribe(result => {
          if (result.success) {
            window.alert(result.message);
            this.router.navigate(['/']);  // redirect
          }
          else {
            window.alert(result.message);
          }
      });
    }
  }

}
