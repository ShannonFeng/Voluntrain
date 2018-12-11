import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface userData {
  isLoggedIn: boolean,
  name: string
  email: string,
  zipcode: Number,
  description: string,
  interests: string
}

@Injectable()
export class UserService {

  private user = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  setUser(value) {
    this.user.next(value);
  }

  get currentUser(): Observable<any> {
    return this.user.asObservable();
  }

  getData() {
    return this.http.get<userData>('/api/userdata');
  }

  getEventsSignedUp() {
    return this.http.get('/api/userevents');
  }

  getUserOrgs() {
    return this.http.get('/api/userorgs')
  }
}
