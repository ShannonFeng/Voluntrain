import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Event } from './event';
import { EVENTS } from './mock-events';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  searchEvents(input) {
    return this.http.post<Event[]>("/api/search", {input});
  }

  // Get Events from the server
  getEvents(): Observable<Event[]>{
    return of(EVENTS);
  }

  // Get event by id
  getEvent(id: number): Observable<Event>{
    return of(EVENTS.find(event => event.id === id));
  }

  // Add User into participating list of Event
  // addParticipant(u_email: string): Observable<Event>{
  //   const u_email: 'some@email.com';
  //   return this.http.post<Event>();
  // }

}
