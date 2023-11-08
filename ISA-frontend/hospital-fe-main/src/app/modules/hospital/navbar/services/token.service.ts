import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  logout(): void {
    localStorage.setItem("token", "")
  }

  getToken(): string | null {
    if (localStorage.getItem("token") == "") {
      return "";
    } else {
      return localStorage.getItem("token");
    }
  }

  getIdFromToken(): string {
    let token = window.localStorage.getItem("token")
    if (token) {
      let tokenSplit = token.split('.')
      let decoded = decodeURIComponent(encodeURIComponent(window.atob(tokenSplit[1])));
      let obj = JSON.parse(decoded);
      return obj['Id'];
    }
    return '';
  }

  getRoleFromToken(): number {
    let token = window.localStorage.getItem("token")
    if (token) {
      let tokenSplit = token.split('.')
      let decoded = decodeURIComponent(encodeURIComponent(window.atob(tokenSplit[1])));
      let obj = JSON.parse(decoded);
      return obj['Role'];
    }
    return 6;
  }

  getEmailFromToken(): string {
    let token = window.localStorage.getItem("token")
    if (token) {
      let tokenSplit = token.split('.')
      let decoded = decodeURIComponent(encodeURIComponent(window.atob(tokenSplit[1])));
      let obj = JSON.parse(decoded);
      return obj['Email'];
    }
    return '';
  }
}
