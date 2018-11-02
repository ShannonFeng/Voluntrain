import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent  {
  orgForm;   // will be used for FormGroup instance

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.orgForm = formBuilder.group({
      orgName: '',
      address: '',
      zipcode: '',
      bio: ''
    });
  }

  submit() {
    //unimplemented
  }

}
