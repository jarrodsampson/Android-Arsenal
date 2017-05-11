import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {RepoStore} from "../services/Store";
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  savedFavorites = [];
  repoStore: RepoStore;

  constructor(private router: Router, repoStore: RepoStore, private toastService: MzToastService) {
    this.repoStore = repoStore;
  }

  ngOnInit() {
    this.savedFavorites = this.repoStore.repos;
    console.log(this.savedFavorites);
  }

  remove(repo){
    this.repoStore.remove(repo);
    this.toastService.show("Removed " + repo.title + " repo.", 2500);
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
    this.toastService.show("Cleared All Saved Repositories.", 2500);
    this.savedFavorites = [];
  }

}
