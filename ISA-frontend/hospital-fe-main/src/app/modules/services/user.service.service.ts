import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getPrimaryCareDoctors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-primary-care-doctors`);
  }
  getPatientById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/patient${id}`);
  }
  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }
  getDoctorsForAppointment(patientId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-appointment-doctors?patientId=${patientId}`);
  }

  getPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-patients`);
  }
}
