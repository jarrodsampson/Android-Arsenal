import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

import { APIService } from '../services/APIService';
import { MzToastService } from 'ng2-materialize';

import 'rxjs/Rx';
import {RepoStore} from "../services/Store";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  arsenalData = [];
  categoriesData = [];
  categoriesTop = [];
  savedFavorites = [];
  title = 'Arsenal Data';
  search = {title: ''};
  item = {};
  count = 80;
  alphabet = [];
  repoStore: RepoStore;


  constructor(private router: Router, private _apiService: APIService, repoStore: RepoStore, private toastService: MzToastService) {
    this.alphabet = _apiService.alphabet;
    this.repoStore = repoStore;
    for (var i = 0; i < this.repoStore.repos.length;++i) {
      this.savedFavorites.push(this.repoStore.repos[i].title);
    }
    console.log(this.savedFavorites);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this._apiService.getTopRepos().subscribe(
      data => this.arsenalData = data.data,
      err => console.error(err),
      () => console.log("Repo Data", this.arsenalData)
    );

    this._apiService.getAllCategories().subscribe(
      data => this.categoriesData = data.data,
      err => console.error(err),
      () => console.log("All Categories", this.categoriesData)
    );

    this._apiService.getTopCategories().subscribe(
      data => this.categoriesTop = data.data,
      err => console.error(err),
      () => console.log("Top Categories", this.categoriesTop)
    );
  }


  searchIt(term) {
    //console.log(term);
    this.router.navigate(['./search/' + encodeURI(term)]);
  }

  detailsView(repo) {
    //console.log(repo.id);
    this.router.navigate(['./details/' + repo.id]);
  }

  categoryView(category) {
    //console.log(category.title);
    this.router.navigate(['./category/' + encodeURI(category.title)]);
  }

  letterView(letter) {
    //console.log(letter);
    this.router.navigate(['./find/' + encodeURI(letter)]);
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

  onScroll () {
    this._apiService.getMoreRepos(this.count).subscribe(
        data => {this.arsenalData = this.arsenalData.concat(data.data); this.count += data.data.length; },
        err => console.error(err),
        () => {console.log("Full Dataset", this.arsenalData); console.log("Counter: ", this.count);}
      );
  }

}
