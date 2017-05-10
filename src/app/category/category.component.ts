import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { APIService } from '../services/APIService';

@Component({
  selector: 'app-root',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category = "";
  searchList = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _apiService: APIService) {}

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

}
