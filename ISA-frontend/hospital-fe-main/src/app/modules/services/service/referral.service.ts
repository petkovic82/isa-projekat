import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  private referralLettersUrl = 'http://localhost:16177/api/referralLetters'; // Add the URL for your ReferralLettersController

  constructor(private http: HttpClient) { }

  // ... Previous methods ...

  // Add a method to get all referral letters
  getAllReferralLetters(): Observable<any> {
    return this.http.get(`${this.referralLettersUrl}`);
  }

  // Add a method to get a referral letter by ID
  getReferralLetterById(id: number): Observable<any> {
    return this.http.get(`${this.referralLettersUrl}/${id}`);
  }

  // Add a method to get referral letters for a patient
  getReferralLettersForPatient(patientId: number): Observable<any> {
    return this.http.get(`${this.referralLettersUrl}/getMyReferralLetters?patientId=${patientId}`);
  }

  // Add a method to create a new referral letter
  //ReferralLetterDto
  createReferralLetter(dto: any): Observable<any> {
    return this.http.post(`${this.referralLettersUrl}`, dto);
  }

  // Add a method to update a referral letter
  //ReferralLetterDto
  updateReferralLetter(id: number, dto: any): Observable<any> {
    return this.http.put(`${this.referralLettersUrl}/${id}`, dto);
  }

  // Add a method to delete a referral letter
  deleteReferralLetter(id: number): Observable<any> {
    return this.http.delete(`${this.referralLettersUrl}/${id}`);
  }
}
