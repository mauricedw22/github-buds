import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  apiURL: string = 'https://api.github.com/users/'; //mauricedw22
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  data: any;

  constructor(private http: HttpClient) { }

  // Read operation
  getUserData(username: string) {    
    return this.http.get(this.apiURL + username);
  }

}
