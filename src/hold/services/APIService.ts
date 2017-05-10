import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class APIService {
  constructor(private http:Http) { }

  server = "//jarrodsampson.com/api/";

  alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  getTopRepos() {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json').map((res:Response) => res.json());
  }

  getMoreRepos(id) {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json&t=more&q=' + id).map((res:Response) => res.json());
  }

  getRandomReposFromCategory(item) {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json&t=categoryrand&q=' + item).map((res:Response) => res.json());
  }

  searchAllRepos(term) {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json&q=' + term).map((res:Response) => res.json());
  }

  searchRepoById(id) {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json&t=id&q=' + id).map((res:Response) => res.json());
  }

  searchAllReposByLetter(letter) {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json&t=letter&q=' + letter).map((res:Response) => res.json());
  }

  searchAllReposByCategory(category) {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json&t=category&q=' + category).map((res:Response) => res.json());
  }

  getTopCategories() {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json&t=top').map((res:Response) => res.json());
  }

  getAllCategories() {
    return this.http.get(this.server + 'arsenal/data.php?v=v1&f=json&t=categories').map((res:Response) => res.json());
  }

  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.
  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get('/app/books.json').map((res:Response) => res.json()),
      this.http.get('/app/movies.json').map((res:Response) => res.json())
    );
  }
}
