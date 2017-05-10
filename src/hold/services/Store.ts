export class Repos {

  private _title: String;
  private _id: String;

  get title() {
    return this._title;
  }
  set title(value: String) {
    this._title = value.trim();
  }

  get id() {
    return this._id;
  }
  set id(value: String) {
    this._id = value;
  }

  constructor(title: String, id: String) {
    this.title = title.trim();
    this.id = id;
  }
}

export class RepoStore {
  repos: Array<Repos>;

  constructor() {
    let persistedTodos = JSON.parse(localStorage.getItem('arsenal-repos') || '[]');
    // Normalize back into classes
    this.repos = persistedTodos.map( (todo: {_title: String, _id: String}) => {
      let ret = new Repos(todo._title, todo._id);
      return ret;
    });
  }

  private updateStore() {
    localStorage.setItem('arsenal-repos', JSON.stringify(this.repos));
  }

  remove(repo: Repos) {
    console.log(repo);
    this.repos.splice(this.repos.indexOf(repo), 1);
    this.updateStore();
  }

  add(title: String, id: String) {
    this.repos.push(new Repos(title, id));
    this.updateStore();
  }
}
