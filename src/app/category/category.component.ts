import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { APIService } from '../services/APIService';
import {RepoStore} from "../services/Store";
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category = "";
  searchList = [];
  savedFavorites = [];
  repoStore: RepoStore;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _apiService: APIService, repoStore: RepoStore, private toastService: MzToastService) {
    this.repoStore = repoStore;
    for (var i = 0; i < this.repoStore.repos.length;++i) {
      this.savedFavorites.push(this.repoStore.repos[i].title);
    }
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.category = decodeURI(params['category']);
      //console.log(this.searchTerm);
    });

    this._apiService.searchAllReposByCategory(this.category).subscribe(
        data => this.searchList = data.data,
        err => console.error(err),
        () => console.log("Search Category Results", this.searchList)
      );

  }

  goBack() {
    window.history.back();
  }

  detailsView(repo) {
    console.log(repo.id);
    this.router.navigate(['./details/' + repo.id]);
  }

  saveRepo(repo) {
    // check if already saved
    if (this.savedFavorites.indexOf(repo.title) > -1) {
      this.toastService.show(repo.title + " is already saved!", 2500);
    } else {
      //console.log("Added: " + repo.title);
      this.repoStore.add(repo.title, repo.id, repo.link, repo.description, repo.tagName);
      this.toastService.show("Added: " + repo.title, 2500);
      this.savedFavorites.push(repo.title);
    }
  }

}
