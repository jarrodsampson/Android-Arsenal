import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {RepoStore} from "../services/Store";


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

  eraseAll() {
    console.log("All Removed");
    this.repoStore.removeAll();
    this.savedFavorites = [];
  }

}
