import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BloodDonationService {

  private bloodDonationUrl = 'http://localhost:16177/api/bloodDonation';

  constructor(private http: HttpClient) { }


  // Add a method to get all blood donation notifications
  getAllBloodDonationNotifications(): Observable<any> {
    return this.http.get(`${this.bloodDonationUrl}`);
  }

  // Add a method to get a blood donation notification by ID
  getBloodDonationNotificationById(id: number): Observable<any> {
    return this.http.get(`${this.bloodDonationUrl}/${id}`);
  }

  // Add a method to create a new blood donation notification
  //BloodDonationNotification
  createBloodDonationNotification(bdn: any): Observable<any> {
    return this.http.post(`${this.bloodDonationUrl}`, bdn);
  }

  // Add a method to make a blood donation appointment
  //BloodDonationRequestDto
  makeBloodDonationAppointment(bdn: any): Observable<any> {
    return this.http.post<any>(`${this.bloodDonationUrl}/makeBloodAppointment`, bdn);
  }

  // Add a method to update a blood donation notification
  //umesto any BloodDonationNotification
  updateBloodDonationNotification(id: number, bdn: any): Observable<any> {
    return this.http.put(`${this.bloodDonationUrl}/${id}`, bdn);
  }

  // Add a method to delete a blood donation notification
  deleteBloodDonationNotification(id: number): Observable<any> {
    return this.http.delete(`${this.bloodDonationUrl}/${id}`);
  }

  // Add a method to approve a blood donation notification
  approveBloodDonationNotification(id: number): Observable<any> {
    return this.http.put(`${this.bloodDonationUrl}/approve/${id}`, null);
  }

  // Add a method to deny a blood donation notification
  denyBloodDonationNotification(id: number): Observable<any> {
    return this.http.put(`${this.bloodDonationUrl}/deny/${id}`, null);
  }
}
