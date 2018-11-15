import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface loginResult {
  success: boolean,
  message: string
}

interface createAccountResult {
  success: boolean,
  message: string
}

interface createOrgResult {
  success: boolean,
  message: string
}

interface logoutResult {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  constructor(private http:HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(email, password) {
    // post login credentials to API server and return user info if correct
    return this.http.post<loginResult>("/api/login", {email, password});
  }

  logout() {
    return this.http.post<logoutResult>("/api/logout", {});
  }

  createAccount(name, email, zipcode, password, description, interests) {
    var params = {name, email, zipcode, password, description, interests}; 
    return this.http.post<createAccountResult>("/api/createAccount", params);
  }

  createOrg(name, location, zipcode, bio) {
    return this.http.post<createOrgResult>("/api/createOrg", {name, location, zipcode, bio});
  }
}
