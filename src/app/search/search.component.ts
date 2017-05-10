import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { APIService } from '../services/APIService';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = "";
  searchList = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _apiService: APIService) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchTerm = params['searchTerm'];
      //console.log(this.searchTerm);
    });

    this._apiService.searchAllRepos(this.searchTerm).subscribe(
        data => this.searchList = data.data,
        err => console.error(err),
        () => console.log("Search Results", this.searchList)
      );

  }

  goBack() {
    this.router.navigate(['./home']);
  }

  detailsView(repo) {
    console.log(repo.id);
    this.router.navigate(['./details/' + repo.id]);
  }

}
