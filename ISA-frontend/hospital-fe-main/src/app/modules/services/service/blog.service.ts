import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogUrl = 'http://localhost:16177/api/blog'; // Add the URL for your BlogController

  constructor(private http: HttpClient) { }

  // ... Previous methods ...

  // Add a method to get all blogs
  getAllBlogs(): Observable<any> {
    return this.http.get(`${this.blogUrl}`);
  }

  // Add a method to get a blog by ID
  getBlogById(id: number): Observable<any> {
    return this.http.get(`${this.blogUrl}/${id}`);
  }

  // Add a method to create a new blog
  createBlog(blogPostDto: any): Observable<any> {
    return this.http.post(`${this.blogUrl}`, blogPostDto);
  }
}
