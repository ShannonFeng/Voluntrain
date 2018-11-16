import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserService } from './user.service'
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LogoutComponent } from './logout/logout.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { AuthService } from './auth.service';
import { ViewEventComponent } from './view-event/view-event.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginFormComponent,
    NavbarComponent,
    HomeComponent,
    CreateaccountComponent,
    LogoutComponent,
    OrgFormComponent,
    ViewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService, AuthService, NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
