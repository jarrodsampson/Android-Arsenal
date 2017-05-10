import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TruncateModule } from 'ng2-truncate';
import { OwlModule } from 'ng2-owl-carousel';
import { Parallax, ParallaxConfig } from './directives/parallax.directive';

import { SearchPipe } from './pipes/searchPipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/categoryList.component';
import { LetterComponent } from './letter/letter.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { APIService } from './services/APIService';
import {RepoStore, Repos} from './services/Store';

import { RouterModule }   from '@angular/router';


@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OwlModule,
    InfiniteScrollModule,
    TruncateModule,
    RouterModule.forRoot([
      {
        path: 'details/:id',
        component: DetailComponent
      },
      {
        path: 'search/:searchTerm',
        component: SearchComponent
      },
      {
        path: 'category/:category',
        component: CategoryComponent
      },
      {
        path: 'categories',
        component: CategoryListComponent
      },
      {
        path: 'find/:letter',
        component: LetterComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'saved',
        component: FavoritesComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/home'
      }
    ])
  ],
  providers: [APIService, RepoStore],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SearchPipe,
    DetailComponent,
    HomeComponent,
    SearchComponent,
    CategoryComponent,
    CategoryListComponent,
    LetterComponent,
    FavoritesComponent,
    Parallax
  ]
})
export class AppModule { }
