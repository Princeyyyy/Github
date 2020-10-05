import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser: User[];
  particlesJS: any;

  constructor(private service: UserServiceService) {
  }

  getSearchedUser(searchTerm) {
    this.service.searchUser(searchTerm).then(
      (success) => {
        this.newUser = this.service.newUser;
        console.log(this.newUser);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getSearchedUser('Princeyyyy');
    // tslint:disable-next-line:prefer-const
    let particlesJS;
    particlesJS.load('particles-js', 'particles.json', null);
  }

}
