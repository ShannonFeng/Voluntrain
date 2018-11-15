import { NgModule }             from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user-login-form', component: UserLoginFormComponent},
  { path: 'createaccount', component: CreateaccountComponent},
  { path: 'org-form', component: OrgFormComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'view-event', component: ViewEventComponent }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
