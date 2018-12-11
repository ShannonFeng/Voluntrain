import { NgModule }             from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { EventsComponent} from './events/events.component';
import { ViewEventComponent} from './view-event/view-event.component';
import { LogoutComponent } from './logout/logout.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogComponentDialog } from './dialog/dialog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrgProfileComponent } from './org-profile/org-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'myProfile', component: UserProfileComponent},
  { path: 'login', component: UserLoginFormComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'create-account', component: CreateaccountComponent},
  { path: 'create-org', component: OrgFormComponent},
  { path: 'create-event/:orgId/:orgName', component: CreateEventComponent},
  { path: 'events', component: EventsComponent},
  { path: 'events-details/:id', component: ViewEventComponent},
  { path: 'org-profile/:id', component: OrgProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
