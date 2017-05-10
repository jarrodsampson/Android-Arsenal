import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { APIService } from '../services/APIService';

@Component({
  selector: 'app-root',
  templateUrl: './categoryList.component.html',
  styleUrls: ['./categoryList.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList = [];

  constructor(private router: Router, private _apiService: APIService) {}

  ngOnInit() {


    this._apiService.getAllCategories().subscribe(
      data => this.categoryList = data.data,
      err => console.error(err),
      () => console.log("Category Results", this.categoryList)
    );

  }

  goBack() {
    //this.router.navigate(['./home']);
    window.history.back();
  }

  categoryView(category) {
    console.log(category.title);
    this.router.navigate(['./category/' + category.title]);
  }

}
