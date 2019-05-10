export class User {
// tslint:disable-next-line: max-line-length
  constructor(public name: string,
              public login: string,
// tslint:disable-next-line: variable-name
              public avatar_url: string,
              public public_repos: number,
// tslint:disable-next-line: variable-name
              public html_url: string,
// tslint:disable-next-line: variable-name
              public created_at: Date,
              public followers: number, public following: number) {
  }
}
