import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/services/auth.service";
import {Router} from "@angular/router";
// @ts-ignore
import {UserDto} from "../../dto/userDto";
import {DTORegistrationMedicalData} from "../../services/auth/models/DTORegistrationMedicalData";
import {UserServiceService} from "../../services/user.service.service";
import {map} from "rxjs";
import {UsersService} from "../../services/service/users.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
//TRIMUJ SVEE
 gender: number = 0;
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  doctor: number | null = null;
  userType: number = 0;
  newUser = new DTORegistrationMedicalData('', '','','',0, 1);
  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserServiceService,
              private usersService : UsersService
             ) {}

  doctors = [
    { id: '1', name: 'Ana Kesic' },];
  genders = [
    { id: '0', name: 'Female' },
    { id: '1', name: 'Male' }
  ];



  register() {
    this.newUser.bloodSugar = parseInt(String(this.gender));
    this.newUser.firstName = this.firstName;
    this.newUser.lastName = this.lastName;
    this.newUser.email = this.email;
    this.newUser.password = this.password;
    this.newUser.primaryCareDoctorId =  parseInt(String(this.doctor));
    this.newUser.userType = 0;

    console.log(this.newUser)
    this.authService.register(this.newUser).subscribe({
      next: res => {
        console.log(res);
        alert("Successfully registered patient with id:" +res.id);
      },
      error: err => {
        alert("Vas nalog je blokiran!")
        console.log(err);
      }
    });

  }
  ngOnInit(): void {
    this.usersService.getAllSpecialists(1).pipe(
      map((res: any) => {
        console.log(res)
        return res.map((doctor: any) => {
          return {
            id: doctor.id,
            name: `${doctor.name}  ${doctor.surname}`
          };
        });
      })
    ).subscribe({
      next: (doctors: any) => {
        this.doctors= doctors
       console.log(doctors);
      },
      error: (err: any) => {
        console.log(err);
      }
    });

  }
  login() {
    this.router.navigate(['/login']);
  }
}
