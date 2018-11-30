import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Org} from './org';
import {ORGS} from './mock-orgs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(
    private http: HttpClient
  ) { }

  // Get Events from the server
  getOrgs(): Observable<Org[]>{
    return of(ORGS);
  }

  // Get event by id
  getOrgByID(id: number): Observable<Org>{
    return of(ORGS.find(org => org.id === id));
  }
}
