import { NgModule }             from '@angular/core';
import { RouterModule, Routes}  from '@angular/router';

import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user-login-form', component: UserLoginFormComponent},
  { path: 'createaccount', component: CreateaccountComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
