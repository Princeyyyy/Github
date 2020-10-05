import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {User} from './user';
import {UserComponent} from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  newUser: User[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=3cbbddb991c02e7d5a2f0fd4224f9267a5153e5f';

  constructor(private http: HttpClient) {
  }
  
  searchMyUser(searchTerm: string) {
    // tslint:disable-next-line:class-name
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