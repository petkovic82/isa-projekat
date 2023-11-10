import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../services/token.service";
import {AuthService} from "../../../../services/auth/services/auth.service";

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
    private router: Router,
    private auth: AuthService) {
  }

  token = localStorage.getItem("token")
  email: string = '';
  loggedOut: boolean = true;

  ngOnInit(): void {

    this.id = Number(this.tokenService.getId());
    this.email = this.tokenService.getEmailFromToken();
    this.userType = Number(this.tokenService.getRole());

  }

  LoggedRole(): string | null {
    return this.tokenService.getRole();
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

  onLogout() {
    this.auth.clearAuthAndRedirectHome();
    localStorage.clear();
    this.loggedOut = true;
  }

  onToggle() {
    this.isToggled = !this.isToggled;
  }

  Companies() {
    this.router.navigate(['/companies/employee/' + this.id])
  }

  Appointments() {
    this.router.navigate(['/appointments/doctor/' + this.id])
  }

  RegisterSystemAdmin() {
    this.router.navigate(['/patients'])
  }


  isLoggedUser() {
    return this.auth.getToken() !== null;
  }

  Login() {
    this.router.navigate(['/login'])
  }

  Register() {
    this.router.navigate(['/register'])
  }

  Home() {
    if(this.isLoggedUser()) {
      this.router.navigate(['/landing'])
    }
    else{
      this.router.navigate(['/'])
    }
  }
}

