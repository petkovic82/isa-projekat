import { Component, OnInit } from '@angular/core';
import {DTORegistrationMedicalData} from "../../../services/auth/models/DTORegistrationMedicalData";
import {AuthService} from "../../../services/auth/services/auth.service";
import {Router} from "@angular/router";
import {UserServiceService} from "../../../services/user.service.service";
import {map} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {DTOAppointment} from "../../../model/room.model";
import {AppointmentService} from "../../../services/appointment.service";
import {TokenService} from "../../navbar/services/token.service";


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
//TRIMUJ SVEE
  priority: any;
  doctor: number | null = null;
  minDate: any;
  startDate: any;
  dateFilters: any;
  endDate: any;
  patient: any;
  doctors = [
    { id: '1', name: 'Ana Kesic' },];
  priorities = [
    { id: '1', name: 'Time is priority' },
    { id: '2', name: 'Doctor is priority' },];

  id: number = 0;
  public dataSource = new MatTableDataSource<Date>();
  public displayedColumns = ['date'];
  private user: any;
  private appointment: DTOAppointment = new DTOAppointment();

  constructor(private authService: AuthService,
              private appointmentService:AppointmentService,
              private router: Router, private userService: UserServiceService,
              private ts:TokenService) {}


  ngOnInit(): void {
    this.id = Number(this.ts.getIdFromToken());
    this.userService.getPatientById(this.id).subscribe({
      next: res => {
        this.user = res;
        console.log(this.user)
        this.patient = `${this.user.firstName}  ${this.user.lastName}`;
      },
      error: err => {
        console.log(err);
      }
    });

    this.userService.getDoctorsForAppointment(this.id).subscribe({
      next: res => {
        if (Array.isArray(res)) {
          const doctors = res.map((doctor: { id: any; firstName: any; lastName: any; }) => {
            return ({
              id: doctor.id.toString(),
              name:  `${doctor.firstName}  ${doctor.lastName}`
            });
          });
          this.doctors = doctors;
          console.log(doctors);
        } else {
          const doctor = {
            id: res.id.toString(),
            name: `${res.firstName} ${res.lastName}`
          };
          this.doctors = [doctor];
          console.log(doctor);
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }

  Generate() {

    this.appointment.startTime = this.startDate;
    this.appointment.endTime= this.endDate;
    this.appointment.patientId = this.user.id;
    this.appointment.doctorId = Number(this.doctor);

    console.log(this.appointment)
    this.appointmentService.generateAppointment(this.appointment).subscribe(res => {
      this.dataSource.data = res;
    })
  }

  chooseTime(dateTime: any) {
    this.appointment.startTime = dateTime;
    console.log(dateTime)
    console.log(this.appointment)
    this.appointmentService.createAppointment(this.appointment).subscribe(res => {
      this.router.navigate(['/appointments/patient/'+this.id]);
    })
  }
}
