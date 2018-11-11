import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface userData {
  isLoggedIn: boolean,
  name: string
  email: string,
  zip: Number
}

interface logoutResult {
  success: boolean
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<userData>('/api/userdata');
  }

  logout() {
    return this.http.post<logoutResult>("api/logout", {});
  }

}