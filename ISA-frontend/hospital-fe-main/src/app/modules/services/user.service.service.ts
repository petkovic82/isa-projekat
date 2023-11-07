import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }


  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }
}
