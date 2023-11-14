import {Component, OnInit} from '@angular/core';
import {DTORegistrationMedicalData} from "../../services/auth/models/DTORegistrationMedicalData";
import {AuthService} from "../../services/auth/services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../hospital/navbar/services/token.service";
import {MatDialog} from "@angular/material/dialog";
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  companyId: string = '';
  phoneNumber: string = '';
  job: string = '';
  country: string = '';
  username: string = '';
  city: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '0';
  passwordsDoNotMatch: boolean = false;
  systemAdminLoggedIn: boolean = false;

  newUser = new DTORegistrationMedicalData("", "", "", "", "", 0, "", "", "", "", 0, 0);

  constructor(private authService: AuthService,
              private Service: ServiceService,
              private router: Router) {
  }


  roles = [
    {id: '0', name: 'Employee'},
  ];

  company = [
    {id: '0', name: 'Company1'},
  ];

  rolesWhenSystemAdmin = [
    {id: '0', name: 'Employee'},
    {id: '1', name: 'Company admin'},
    {id: '2', name: 'System admin'}
  ];

  register() {

    this.checkPasswordMatch()
    if (this.passwordsDoNotMatch) return;

    this.newUser.userRole = Number(this.role);
    this.newUser.city = this.city;
    this.newUser.username = this.username;
    this.newUser.country = this.country;
    this.newUser.job = this.job;
    this.newUser.phoneNumber = this.phoneNumber;
    this.newUser.companyId = Number(this.companyId);
    this.newUser.firstName = this.firstName;
    this.newUser.lastName = this.lastName;
    this.newUser.email = this.email;
    this.newUser.password = this.password;


    if (this.systemAdminLoggedIn) {
      this.authService.adminRegistration(this.newUser).subscribe({
        next: res => {
          console.log(res);
          alert("Successfully registered user with id: " + res.id + "! Check your email to confirm registration!");
        },
        error: err => {
          if (err.status === 400) { //POPRAVI
            alert('This company already has registered admin');
          }
        }
      });
    } else {
      this.authService.register(this.newUser).subscribe({
        next: res => {
          console.log(res);
          alert("Successfully registered user with id: " + res.id + "! Check your email to confirm registration!");
        },
        error: err => {
          console.log(err);
        }
      });

    }

  }

  ngOnInit(): void {
    if (this.authService.isSystemAdmin()) {
      this.systemAdminLoggedIn = true;
    }
    this.Service.getAllCompanies().subscribe((data: any) => {
      this.company = data;
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  checkPasswordMatch(): void {
    this.passwordsDoNotMatch = this.password !== this.confirmPassword;
  }
}
