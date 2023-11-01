import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HealthDataService {

  private healthDataUrl = 'http://localhost:16177/api/healthData';

  constructor(private http: HttpClient) { }


  // Add a method to get all health data
  getAllHealthData(): Observable<any> {
    return this.http.get(`${this.healthDataUrl}`);
  }

  // Add a method to get health data by ID
  getHealthDataById(id: number): Observable<any> {
    return this.http.get(`${this.healthDataUrl}/${id}`);
  }

  // Add a method to get health data for a user
  getHealthDataForUser(userId: number): Observable<any> {
    return this.http.get(`${this.healthDataUrl}/getHealthData?userId=${userId}`);
  }

  // Add a method to get last two days' health data for a patient
  getLastTwoDaysHealthData(patientId: number): Observable<any> {
    return this.http.get(`${this.healthDataUrl}/getLastTwoDaysHealthData?patientId=${patientId}`);
  }

  // Add a method to create health data
  //PatientHealthDataDto
  createHealthData(dto: any): Observable<any> {
    return this.http.post(`${this.healthDataUrl}`, dto);
  }

  // Add a method to get menstrual data for a user
  getMenstrualDataForUser(patientId: number): Observable<any> {
    return this.http.get(`${this.healthDataUrl}/getMyMenstrualData?patientId=${patientId}`);
  }

  // Add a method to update menstrual data
  //MenstrualDataDto
  updateMenstrualData(id: number, dto: any): Observable<any> {
    return this.http.put(`${this.healthDataUrl}/update-menstrual${id}`, dto);
  }
}
