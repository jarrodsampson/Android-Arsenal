import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TruncateModule } from 'ng2-truncate';
import { OwlModule } from 'ng2-owl-carousel';
import { Parallax } from './directives/parallax.directive';
import { MaterializeModule } from 'ng2-materialize';

import { SearchPipe } from './pipes/searchPipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/categoryItems/category.component';
import { CategoryListComponent } from './category/categoriesList/categoryList.component';
import { LetterComponent } from './letter/letter.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ErrorComponent } from './error/error.component';

import { APIService } from './services/APIService';
import {RepoStore} from './services/Store';

import { RouterModule }   from '@angular/router';
import {APP_ROUTES} from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationService } from './app.animation.service';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    OwlModule,
    InfiniteScrollModule,
    TruncateModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [APIService, RepoStore, AnimationService],
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
    Parallax,
    ErrorComponent
  ]
})
export class AppModule { }
