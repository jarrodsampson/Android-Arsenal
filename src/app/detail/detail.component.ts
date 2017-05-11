import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { APIService } from '../services/APIService';
import {RepoStore} from "../services/Store";
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  searchId = "";
  details = {};
  detailItem = "";
  relatedList = [];
  isRelated = false;
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
      this.searchId = params['id'];
      //console.log(this.searchId);
    });

    this.loadData(this.searchId)
  }

  goBack() {
    if (!this.isRelated){
      window.history.back();
    } else {
      this.router.navigate(['./home']);
    }
  }

  detailsView(repo) {
    console.log(repo.id);
    this.router.navigate(['./details/' + repo.id]);
    this.isRelated = true;
    this.loadData(repo.id);
  }

  loadData(id) {

    this.detailItem = "";

    this._apiService.searchRepoById(id).subscribe(
        data => {this.details = data.data[0]; this.detailItem = data.data[0].tagName},
        err => console.error(err),
        () => {
          console.log("Detail data:", this.details);

          this._apiService.getRandomReposFromCategory(this.detailItem).subscribe(
              data => this.relatedList = data.data,
              err => console.error(err),
              () => console.log("Related data", this.relatedList)
            );
        }
      );
  }

  categoryView(category) {
    //console.log(category.title);
    this.router.navigate(['./category/' + encodeURI(category)]);
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
