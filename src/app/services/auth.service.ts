import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  url = '';

  signup(username: string, email: string, password: string) {
      return this.http.post(this.url,
          {name: username, email: email, password: password},
          {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})});
  }
}
