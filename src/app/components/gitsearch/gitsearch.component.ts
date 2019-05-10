import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../../services/gitsearch.service';
import { User } from '../../model/user';
import { Gitrepo } from '../../model/gitrepo';


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  public searchMe = 'modongo';
  public githubUser: string;

  users: User;
  repository: Gitrepo;
  public searchRepo: string;
  public resultCount = 12;


  findUser(username) {
    this.githubUser = '';
    this.searchMe = username;
    this.ngOnInit();
  }


  constructor(public githubUserRequest: GitsearchService, public userRepos: GitsearchService) { }

  ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }


  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;

  }

}
