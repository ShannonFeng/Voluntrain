import { NgModule }             from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { EventsComponent} from './events/events.component';
import { ViewEventComponent} from './view-event/view-event.component';
import { LogoutComponent } from './logout/logout.component';
 

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: UserLoginFormComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'create-account', component: CreateaccountComponent},
  { path: 'create-org', component: OrgFormComponent},
  { path: 'events', component: EventsComponent},
  { path: 'events-details/:id', component: ViewEventComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
