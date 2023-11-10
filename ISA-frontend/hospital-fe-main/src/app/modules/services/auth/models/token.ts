export class Token {
  sub: string;
  nameid: string;
  authorities: string[];
  iat: number;
  exp: number;

  constructor(sub: string, id: string, authorities: string[], iat: number, exp: number) {
    this.sub = sub;
    this.nameid = id;
    this.authorities = authorities;
    this.iat = iat;
    this.exp = exp;
  }
}
