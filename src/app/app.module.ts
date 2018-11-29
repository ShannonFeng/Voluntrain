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
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LogoutComponent } from './logout/logout.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { EventsComponent } from './events/events.component';
import { EventService } from './event.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogComponentDialog } from './dialog/dialog.component';

import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchPageComponent } from './search-page/search-page.component';

// Angular Material imports:
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

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
    DialogComponent,
    DialogComponentDialog,
    CreateEventComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8A-n9JeSALtz5cXQp_dLqn22gPnyDu4c'
    }),
    // Angular Material imports:
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [
    UserService, 
    AuthService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    MatDialogModule,
    DialogComponent,
    DialogComponentDialog,
    UserService,
    EventService,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 

  
}
