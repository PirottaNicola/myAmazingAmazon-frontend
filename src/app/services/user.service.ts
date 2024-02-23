import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = environment.production
    ? environment.PRODUCTION_API
    : environment.LOCALHOST_API;

  constructor(private http: HttpClient) {
    console.log('User service is working');
  }

  /**
   * This method is used to send a POST request to the server to log in a user
   *
   * @param username
   * @param password
   * @returns an Observable object that can be used to subscribe to the response from the server
   */
  login(username: string, password: string): Observable<any> {
    console.log('User trying to login');

    // The HttpClient service is used to send HTTP requests to a server. The post() method is used to send a POST request to the server. The post() method takes two arguments: the URL of the server and the data to be sent to the server. The post() method returns an Observable object that can be used to subscribe to the response from the server.
    return this.http.post(`${this.apiURL}/login`, {
      username,
      password,
    });
  }
}
