import {Component, Host, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../services/token.service";
import {ProfileServiceTsService} from "../../services/profile-service.ts.service";
import {UserServiceService} from "../../../../services/user.service.service";
import {UsersService} from "../../../../services/service/users.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private userType: number = -1;
  isToggled: boolean= false
  name: string = ''
  id: number = 0;


  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router,
    private profileService: ProfileServiceTsService,
    private userService:UserServiceService,
    private usersService: UsersService) {

  }
  token = localStorage.getItem("token")

  email: string= '';

  ngOnInit(): void {

    this.id = Number(this.tokenService.getIdFromToken());
    this.email = this.tokenService.getEmailFromToken();
    this.userType =  Number(this.tokenService.getRoleFromToken());

  }

  isLoggedPatient():boolean{
    return this.userType == 0;
  }

  isLoggedDoctor():boolean{
    return this.userType == 1;
  }

  isLoggedAdmin():boolean{
    return this.userType == 2;
  }
  onHome(){
    this.router.navigate(['/'])
  }

  profile(){
    this.router.navigate(['/profile'])
  }

  onLogout(){
    localStorage.clear();
  }

  onToggle(){
    this.isToggled = !this.isToggled;
  }

  AppointmentsPatient() {
    this.router.navigate(['/appointments/patient/'+this.id])

  }

  AppointmentsDoctor() {
    this.router.navigate(['/appointments/doctor/'+this.id])
  }

  MedicalDataPatient() {
    this.router.navigate(['/graph/'+this.id])
  }

  NewAppointment() {  this.router.navigate(['/appointment-create'])  }

  NewBlog() { this.router.navigate(['/blog']) }

  Patients(){ this.router.navigate(['/patients']) }

  News() {  this.router.navigate(['/news']) }

 }

