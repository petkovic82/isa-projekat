import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/appointment'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }


  reportAppointment(appointment: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/report`, appointment);
  }


  getAllMedicalData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-all-medical-data`);
  }

  getAppointmentByPatientId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointments${id}`);
  }

  getAppointmentByDoctorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/doctor-appointment${id}`);
  }

  generateAppointment(dto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/generate`, dto);
  }


  getLastSixEntriesForPatient(patientId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-last-six-for-patient?patientId=${patientId}`);
  }


  cancelAppointment(appointmentId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/cancel-appointment/${appointmentId}`, null);
  }


  getMedicalDataById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/medical-data/${id}`);
  }

  getMedicalDataByPatientId(patientId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/medical-data-by-patient/${patientId}`);
  }

  getAppointmentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/one-appointment/${id}`);
  }

  getLastCycleDate(patientId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/last-cycle/${patientId}`);
  }

  createMedicalData(medicalData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-data`, medicalData);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create-appointment`, appointment);
  }

  startNewCycle(patientId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/new-cycle`, { patientId });
  }

  deleteMedicalData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-medical-data${id}`);
  }
}
