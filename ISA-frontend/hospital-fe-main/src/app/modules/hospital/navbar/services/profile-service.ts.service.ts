import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../../services/auth/models/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceTsService {

  baseUrl = 'http://localhost:8080/users'
  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }


  get(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/getUserByID/' + id, {headers: this.headers});
  }

}
