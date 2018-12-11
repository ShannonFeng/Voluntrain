import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private http: HttpClient) { }

  getOrg(orgId) {
    return this.http.post("/api/org", { orgId });
  }

  getOrgEvents(orgId) {
    return this.http.post("/api/orgevents", { orgId });
  }
}
