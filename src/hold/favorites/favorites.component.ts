import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { APIService } from '../services/APIService';

import {RepoStore, Repos} from "../services/Store";


@Component({
  selector: 'app-root',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  savedFavorites = [];
  repoStore: RepoStore;

  constructor(private router: Router, repoStore: RepoStore) {
    this.repoStore = repoStore;
  }

  ngOnInit() {
    this.savedFavorites = this.repoStore.repos;
    console.log(this.savedFavorites);
  }

  remove(repo){
    this.repoStore.remove(repo);
  }

  goBack() {
    this.router.navigate(['./home']);
  }

  detailsView(repo) {
    console.log(repo.id);
    this.router.navigate(['./details/' + repo.id]);
  }

}
