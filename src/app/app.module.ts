import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserService } from './user.service'
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LogoutComponent } from './logout/logout.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { EventsComponent } from './events/events.component';
import { EventService } from './event.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginFormComponent,
    NavbarComponent,
    HomeComponent,
    CreateaccountComponent,
    LogoutComponent,
    OrgFormComponent,
    EventsComponent,
    ViewEventComponent,
    CreateEventComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8A-n9JeSALtz5cXQp_dLqn22gPnyDu4c'
    })
  ],
  providers: [
    UserService,
    EventService,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
