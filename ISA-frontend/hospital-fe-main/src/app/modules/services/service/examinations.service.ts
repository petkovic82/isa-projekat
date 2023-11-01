import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExaminationsService {

  private examinationsUrl = 'http://localhost:16177/api/examinations';

  constructor(private http: HttpClient) { }

  // ... Previous methods ...

  // Add a method to get all examinations
  getAllExaminations(): Observable<any> {
    return this.http.get(`${this.examinationsUrl}`);
  }

  // Add a method to get an examination by ID
  getExaminationById(id: number): Observable<any> {
    return this.http.get(`${this.examinationsUrl}/${id}`);
  }

  // Add a method to create a new examination
  //ExaminationReportDTO
  createExamination(dto: any): Observable<any> {
    return this.http.post(`${this.examinationsUrl}`, dto);
  }

  // Add a method to get examinations for a user
  getExaminationsForUser(patientId: number): Observable<any> {
    return this.http.get(`${this.examinationsUrl}/getExamination?patientId=${patientId}`);
  }
}
