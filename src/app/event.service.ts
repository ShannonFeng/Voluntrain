import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  searchEvents(input) {
    return this.http.post<Event[]>("/api/search", { input });
  }

  getEvent(id) : Observable<Event>{
    return this.http.post<Event>("/api/event", { id });
  }

}
