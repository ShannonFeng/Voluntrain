import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface userData {
  isLoggedIn: boolean,
  name: string
  email: string,
  zipcode: Number
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<userData>('/api/userdata');
  }

}