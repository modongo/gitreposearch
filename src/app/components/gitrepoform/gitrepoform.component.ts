import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gitsearch } from '../../model/gitsearch';


@Component({
  selector: 'app-gitrepoform',
  templateUrl: './gitrepoform.component.html',
  styleUrls: ['./gitrepoform.component.css']
})
export class GitrepoformComponent implements OnInit {
  searchInfo = new Gitsearch('');
  @Output() getName = new EventEmitter<Gitsearch>();

  searchFor(data) {
    this.getName.emit(data.value.find);
    console.log(data.value.find)
    data.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
