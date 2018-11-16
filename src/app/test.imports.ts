import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

export const testImports= [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA8A-n9JeSALtz5cXQp_dLqn22gPnyDu4c'
    })
];