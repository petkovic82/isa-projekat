import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DTOAppointment} from "../../model/room.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:16177/api/appointment'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  // Add a method to check the period
  //SuggestionDto
  checkPeriod(period: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/checkPeriod`, period);
  }

  // Add a method to add an appointment
  addAppointment(dto: DTOAppointment): Observable<any> {
    return this.http.post(`${this.baseUrl}/addAppointment`, dto);
  }

  // Add a method to cancel an appointment
  cancelAppointment(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/cancel/${id}`, null);
  }

  // Add a method to get appointments by patient
  getAppointmentsByPatient(patientId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAppointmentsByPatient?patientId=${patientId}`);
  }

  // Add a method to get doctor's today appointments
  getDoctorTodayAppointments(today: string, doctorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getDoctorTodayAppointments?today=${today}&doctorId=${doctorId}`);
  }

  // Add a method to mark an appointment as used
  markAppointmentAsUsed(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/use/${id}`, null);
  }
}
