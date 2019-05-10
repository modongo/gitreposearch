import { Component, OnInit } from '@angular/core';
import { Gitrepo } from '../../model/gitrepo';
import { GitsearchComponent } from '../../components/gitsearch/gitsearch.component';
import { GitsearchService } from '../../services/gitsearch.service';

@Component({
  selector: 'app-gitrepo',
  templateUrl: './gitrepo.component.html',
  styleUrls: ['./gitrepo.component.css']
})
export class GitrepoComponent implements OnInit {
  repository: Gitrepo;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;
    this.getDataFunction();

  }

  constructor(public gitRepoRequest: GitsearchService) { }

  ngOnInit() {
    this.resultCount = 5;
    this.gitRepoRequest.gitRepos(this.searchRepo);
  }


  getDataFunction() {
    this.gitRepoRequest.gitRepos(this.searchRepo);

  }



}
