import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Output } from '@angular/core'

interface loginResult {
  success: boolean,
  message: string
}

interface createOrgResult {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // may delete later
  @Output() getLoginStatus: EventEmitter<boolean> = new EventEmitter();

  private loggedInStatus = false;

  constructor(private http:HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    this.getLoginStatus.emit(value);
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  logUserIn(email, password) {
    // post login credentials to API server and return user info if correct
    return this.http.post<loginResult>("/api/login", {email, password});
  }

  createOrg(name, location, zip, bio) {
    return this.http.post<createOrgResult>("/api/createOrg", {name, location, zip, bio});
  }

}
