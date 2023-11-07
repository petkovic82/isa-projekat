import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/services/auth.service";
import {Router} from "@angular/router";
// @ts-ignore
import {UserDto} from "../../dto/userDto";
import {DTORegistrationMedicalData} from "../../services/auth/models/DTORegistrationMedicalData";
import {TokenService} from "../../hospital/navbar/services/token.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  passwordFieldType: string = 'password';
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  companyId: any;
  phoneNumber: any;
  job: any;
  country: any;
  username: any;
  city: any;
  role: number = 0;
  confirmPassword: any;
  passwordsDoNotMatch: boolean = false;
  systemAdminLoggedIn: boolean = false;

  newUser = new DTORegistrationMedicalData("", "", "", "", "", 0, "", "", "", 0, 0, 0);


  constructor(private authService: AuthService, private router: Router, private ts: TokenService) {}

  roles = [
    {id: '0', name: 'Employee'},
  ];
  rolesWhenSystemAdmin = [
    {id: '0', name: 'Employee'},
    {id: '1', name: 'Company admin'},
    {id: '2', name: 'System admin'}
  ];

  register() {
    this.checkPasswordMatch()
    if (this.passwordsDoNotMatch) return;

    this.newUser.role = parseInt(String(this.role));
    this.newUser.city = this.city;
    this.newUser.username = this.username;
    this.newUser.country = this.country;
    this.newUser.job = this.job;
    this.newUser.phoneNumber = this.phoneNumber;
    this.newUser.companyId = parseInt(String(this.companyId));
    this.newUser.firstName = this.firstName;
    this.newUser.lastName = this.lastName;
    this.newUser.email = this.email;
    this.newUser.password = this.password;

    console.log(this.newUser)
    this.authService.register(this.newUser).subscribe({
      next: res => {
        console.log(res);
        alert("Successfully registered patient with id: " + res.id + "! Check your email to confirm registration!");
      },
      error: err => {
        alert("Error !")
        console.log(err);
      }
    });

  }

  ngOnInit(): void {
    if( this.ts.getRoleFromToken() === 2 )
    this.systemAdminLoggedIn = true;
  }

  login() {
    this.router.navigate(['/login']);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  checkPasswordMatch(): void {
    this.passwordsDoNotMatch = this.password !== this.confirmPassword;
  }
}
