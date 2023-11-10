import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DTORegistrationMedicalData} from "./auth/models/DTORegistrationMedicalData";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:16177/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  registerUser(dto: DTORegistrationMedicalData): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/userRegistration`, dto);
  }

  registerAdminUser(dto: DTORegistrationMedicalData): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/adminRegistration`, dto);
  }


  getCurrentUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/getCurrentUser?id=${id}`);
  }
  /*registerUser(dto: RegistrationDto) {
    this.userService.registerUser(dto).subscribe((response) => { });}

  registerAdminUser(dto: RegistrationDto) {
    this.userService.registerAdminUser(dto).subscribe((response) => {}); }

  getCurrentUser(id: number) {
    this.userService.getCurrentUser(id).subscribe((user) => {}); }*/

  getAllEquipment(): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipment/`);
  }

  getEquipmentByCompanyId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipment/company${id}`);
  }

  searchEquipmentByNameOrCompany(searchQuery: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipment/search?searchQuery=${searchQuery}`);
  }

  /*   this.equipmentService.getAllEquipment().subscribe((equipment) => {});
  }

  getEquipmentByCompanyId(id: number) {
    this.equipmentService.getEquipmentByCompanyId(id).subscribe((equipment) => { }); }

  searchEquipment(searchQuery: string) {
    this.equipmentService.searchEquipmentByNameOrCompany(searchQuery).subscribe((equipment) => {});}*/

  getAllCompanies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/company`);
  }

  searchCompaniesByName(searchQuery: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/company/search?searchQuery=${searchQuery}`);
  }
  /*  getAllCompanies() {
    this.companyService.getAllCompanies().subscribe((companies) => {}); }

  searchCompanies(searchQuery: string) {
    this.companyService.searchCompaniesByName(searchQuery).subscribe((companies) => {}); }*/
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
    return this.http.put(`${this.baseUrl}/appointment/book`, dto);
  }
  cancelAppointment(appId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/appointment/cancel?appId=${appId}`, {});
  }
  createAppointment(dto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appointment/create`, dto);
  }

}
