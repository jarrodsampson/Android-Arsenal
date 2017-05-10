export class Repos {

  public _title: String;
  private _id: String;
  private _link: String;
  private _desc: String;
  private _tagName: String;

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

  get link() {
    return this._link;
  }
  set link(value: String) {
    this._link = value;
  }

  get desc() {
    return this._desc;
  }
  set desc(value: String) {
    this._desc = value;
  }

  get tagName() {
    return this._tagName;
  }
  set tagName(value: String) {
    this._tagName = value;
  }

  constructor(title: String, id: String, link: String, desc: String, tagName: String ) {
    this.title = title.trim();
    this.id = id;
    this.link = link.trim();
    this.desc = desc.trim();
    this.tagName = tagName.trim();
  }
}

export class RepoStore {
  repos: Array<Repos>;

  constructor() {
    let persistedTodos = JSON.parse(localStorage.getItem('arsenal-repos') || '[]');
    // Normalize back into classes
    this.repos = persistedTodos.map( (todo: {_title: String, _id: String, _link: String, _desc: String, _tagName: String}) => {
      let ret = new Repos(todo._title, todo._id, todo._link, todo._desc, todo._tagName);
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

  add(title: String, id: String, link: String, desc: String, tagName: String) {
    this.repos.push(new Repos(title, id, link, desc, tagName));
    this.updateStore();
  }

  removeAll() {
    this.repos = [];
    this.updateStore();
  }
}
