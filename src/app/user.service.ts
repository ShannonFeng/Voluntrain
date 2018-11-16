import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'api/user'
  constructor(
    private http: HttpClient) { }

  // parse event id to User's event list
  // addEvent(id: number): void{
  //   var events = this.user.eventSignedUp;
  //   events.push(id);
  //
  // }
}
