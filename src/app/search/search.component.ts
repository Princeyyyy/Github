import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  @Output() searchEmmiter = new EventEmitter<any>();

  constructor() {
  }

  emmitUser() {
  this.searchEmmiter.emit(this.searchTerm);
  }

  ngOnInit() {
  }

}
