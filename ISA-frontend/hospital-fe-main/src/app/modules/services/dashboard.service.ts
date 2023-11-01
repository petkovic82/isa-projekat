import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) { }

  // Create a blog
  createBlog(blog: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-blog`, blog);
  }

  // Create news
  createNews(news: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-news`, news);
  }

  // Archive news
  archiveNews(news: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/archive-news`, news);
  }
}
