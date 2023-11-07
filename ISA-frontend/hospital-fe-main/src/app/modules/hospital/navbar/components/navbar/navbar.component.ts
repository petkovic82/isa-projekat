import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private userType: number = -1;
  isToggled: boolean = false
  name: string = ''
  id: number = 0;


  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router) {
  }

  token = localStorage.getItem("token")
  email: string = '';

  ngOnInit(): void {

    this.id = Number(this.tokenService.getIdFromToken());
    this.email = this.tokenService.getEmailFromToken();
    this.userType = Number(this.tokenService.getRoleFromToken());

  }

  isLoggedEmployee(): boolean {
    return this.userType == 0;
  }

  isLoggedCompanyAdmin(): boolean {
    return this.userType == 1;
  }

  isLoggedSystemAdmin(): boolean {
    return this.userType == 2;
  }

  onHome() {
    this.router.navigate(['/'])
  }

  onLogout() {
    localStorage.clear();
  }

  onToggle() {
    this.isToggled = !this.isToggled;
  }

  AppointmentsPatient() {
    this.router.navigate(['/appointments/patient/' + this.id])
  }

  AppointmentsDoctor() {
    this.router.navigate(['/appointments/doctor/' + this.id])
  }

  Patients() {
    this.router.navigate(['/patients'])
  }


}

