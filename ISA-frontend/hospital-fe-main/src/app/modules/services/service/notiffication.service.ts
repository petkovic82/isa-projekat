import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotifficationService {

  private notificationUrl = 'http://localhost:16177/api/notification'; // Add the URL for your NotificationController

  constructor(private http: HttpClient) { }

  // ... Previous methods ...

  // Add a method to get all notifications
  getAllNotifications(): Observable<any> {
    return this.http.get(`${this.notificationUrl}`);
  }

  // Add a method to get a notification by ID
  getNotificationById(id: number): Observable<any> {
    return this.http.get(`${this.notificationUrl}/${id}`);
  }

  // Add a method to create a new notification
  //NotificationDto
  createNotification(notificationDto: any): Observable<any> {
    return this.http.post(`${this.notificationUrl}`, notificationDto);
  }
}
