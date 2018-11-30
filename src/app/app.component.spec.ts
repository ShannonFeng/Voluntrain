import { TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { OrgComponent } from './org/org.component';
import { ViewOrgComponent } from './view-org/view-org.component';
import { LogoutComponent } from './logout/logout.component';
import { UserService } from './user.service';
import { ViewEventComponent } from './view-event/view-event.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogComponentDialog } from './dialog/dialog.component';
import { EventsComponent } from './events/events.component';
import { SearchPageComponent } from './search-page/search-page.component';




describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        UserLoginFormComponent,
        CreateaccountComponent,
        OrgFormComponent,
        LogoutComponent,
        DialogComponent,
        DialogComponentDialog,
        ViewEventComponent,
        EventsComponent,
        OrgComponent,
        ViewOrgComponent,
        SearchPageComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        UserService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

/*
  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-testing!');
  });
  */
});
