import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'http://localhost:16177/api/users';

  constructor(private http: HttpClient) { }




  //RegistrationDto
  registerUser(dto: any): Observable<any> {
    return this.http.post(`${this.usersUrl}/userRegistration`, dto);
  }

  // Add a method to get the current user by ID
  getCurrentUser(userId: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/getCurrentUser?id=${userId}`);
  }

  // Add a method to get a doctor by ID
  getDoctorById(doctorId: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/doctor${doctorId}`);
  }

  // Add a method to get all doctors
  getAllDoctors(): Observable<any> {
    return this.http.get(`${this.usersUrl}/getAllDoctors`);
  }

  // Add a method to get all specialists by specialization ID
  getAllSpecialists(specializationId: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/getAllSpecialist?specializationId=${specializationId}`);
  }

  // Add a method to get blockable patients
  getBlockablePatients(): Observable<any> {
    return this.http.get(`${this.usersUrl}/getBlockablePatients`);
  }

  // Add a method to get blocked patients
  getBlockedPatients(): Observable<any> {
    return this.http.get(`${this.usersUrl}/getBlockedPatients`);
  }

  // Add a method to block a patient by ID
  blockPatient(patientId: number): Observable<any> {
    return this.http.put(`${this.usersUrl}/block/${patientId}`, null);
  }

  // Add a method to unblock a patient by ID
  unblockPatient(patientId: number): Observable<any> {
    return this.http.put(`${this.usersUrl}/unblock/${patientId}`, null);
  }

  // Add a method to get all patients
  getAllPatients(): Observable<any> {
    return this.http.get(`${this.usersUrl}/getAllPatients`);
  }

  // Add a method to get all specializations
  getAllSpecializations(): Observable<any> {
    return this.http.get(`${this.usersUrl}/getAllSpecializations`);
  }

  // Add a method to get a specialization by ID
  getSpecializationById(specializationId: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/getSpecializationById?id=${specializationId}`);
  }
}
