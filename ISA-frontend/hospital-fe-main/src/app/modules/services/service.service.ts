import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DTORegistrationMedicalData} from "./auth/models/DTORegistrationMedicalData";
import {AuthService} from "./auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:16177/api'; // Replace with your API URL

  private headers: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (token) {
      return this.headers.set('Authorization', `Bearer ${token}`);
    }
    return this.headers;
  }

  registerUser(dto: DTORegistrationMedicalData): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/userRegistration`, dto);
  }

  registerAdminUser(dto: DTORegistrationMedicalData): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/adminRegistration`, dto);
  }


  getCurrentUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/getCurrentUser?id=${id}`);
  }


  getAllEquipment(): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipment/`);
  }

  getEquipmentByCompanyId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipment/company${id}`);
  }

  searchEquipmentByNameOrCompany(searchQuery: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipment/search?searchQuery=${searchQuery}`);
  }


  getAllCompanies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/company`);
  }

  searchCompaniesByName(searchQuery: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/company/search?searchQuery=${searchQuery}`);
  }

  searchEquipmentByNameInCompany(searchEquipment: string, companyId: any) : Observable<any> {
    return this.http.get(`${this.baseUrl}/equipment/search${companyId}?searchQuery=${searchEquipment}`);
  }
  getEquipmentById(companyId: any):any {
    return this.http.get(`${this.baseUrl}/equipment/${companyId}`);
  }

  getAppointmentByEquipmentId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointment/${id}`);
  }
  getAppointmentsByEmployeeId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointment/employee${id}`);
  }
  bookAppointment(dto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/appointment/book`, dto, { headers: this.getHeaders() });
  }
  cancelAppointment(appId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/appointment/cancel?appId=${appId}`, {});
  }
  createAppointment(dto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appointment/create`, dto);
  }

}
