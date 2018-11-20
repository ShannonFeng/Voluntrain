import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { APP_BASE_HREF } from '@angular/common';
import { MapsAPILoader } from '@agm/core';

export const testProviders = [ 
    UserService, 
    AuthService,
    NavbarComponent,
    { provide: APP_BASE_HREF, useValue: '/' },
    MapsAPILoader
];