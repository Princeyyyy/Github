import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from "./user";
import { SearchComponent } from './search/search.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  newUser: User[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=7a3199f0cb0e59a138ed7099cf0a8a4691c1721d';

  constructor(private http: HttpClient) {
  }

  searchUser(searchTerm: string) {
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
    }

    return new Promise((resolve, reject) => {
      this.newUser = [];
      // tslint:disable-next-line:max-line-length
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          // @ts-ignore
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
  }
}