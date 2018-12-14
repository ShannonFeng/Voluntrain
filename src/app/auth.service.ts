import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface result {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(email, password) {
    // post login credentials to API server and return user info if correct
    return this.http.post<result>("/api/login", {email, password});
  }

  logout() {
    return this.http.post<result>("/api/logout", {});
  }

  createAccount(name, email, zipcode, password, description, interests) {
    var params = {name, email, zipcode, password, description, interests}; 
    return this.http.post<result>("/api/createAccount", params);
  }

  createOrg(name, location, zipcode, bio) {
    return this.http.post<result>("/api/createOrg", {name, location, zipcode, bio});
  }

  // Add user email to event
  signUp(email, eventId) {
    return this.http.post<result>("/api/signup", { email, eventId });
  }

}
