import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CreateEventResult {
    success: boolean,
    message: String
}

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

  createEvent(orgId, orgName, eventName, description) {
    return this.http.post<CreateEventResult>("/api/create-event", { orgId, orgName, eventName, description });
  }
}
