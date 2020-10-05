import { Component, OnInit } from '@angular/core';
import {RepoServiceService} from '../repo-service.service';
import {Repository} from '../repository';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  myRepo: Repository[];

  constructor(public reposerv: RepoServiceService) {
  }

  getRepo(searchTerm: string) {
    this.reposerv.getRepo(searchTerm).subscribe(data => {
      this.myRepo = data;
      console.log(this.myRepo);
    });
  }

  ngOnInit() {
    this.getRepo('Princeyyyy');
  }
}