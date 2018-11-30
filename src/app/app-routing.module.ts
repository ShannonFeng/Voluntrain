import { NgModule }             from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { OrgComponent } from './org/org.component';
import { ViewOrgComponent } from './view-org/view-org.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent} from './events/events.component';
import { ViewEventComponent} from './view-event/view-event.component';
import { LogoutComponent } from './logout/logout.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogComponentDialog } from './dialog/dialog.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent},
  { path: 'myProfile', component: UserProfileComponent},
  { path: 'login', component: UserLoginFormComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'create-account', component: CreateaccountComponent},
  { path: 'create-org', component: OrgFormComponent},
  { path: 'organizations', component: OrgComponent},
  { path: 'organizations/:id', component:ViewOrgComponent},
  { path: 'create-event', component: CreateEventComponent},
  { path: 'events', component: EventsComponent},
  { path: 'events-details/:id', component: ViewEventComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],

  entryComponents: [
    DialogComponent,
    DialogComponentDialog
  ],

})
export class AppRoutingModule { }
