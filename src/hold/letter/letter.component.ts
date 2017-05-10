import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { APIService } from '../services/APIService';

@Component({
  selector: 'app-root',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  letter = "";
  searchList = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _apiService: APIService) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.letter = params['letter'];
      //console.log(this.searchTerm);
    });

    this._apiService.searchAllReposByLetter(this.letter).subscribe(
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
