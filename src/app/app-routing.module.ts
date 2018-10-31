import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes}  from '@angular/router';

import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserComponent }          from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-login-form', pathMatch: 'full'},
  { path: 'user-login-form', component: UserLoginFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
