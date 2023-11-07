import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/services/auth.service";
import {Router} from "@angular/router";
import {UserServiceService} from "../../../services/user.service.service";
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
    {id: '1', name: 'Ana Kesic'},];
  priorities = [
    {id: '1', name: 'Time is priority'},
    {id: '2', name: 'Doctor is priority'},];

  id: number = 0;
  public dataSource = new MatTableDataSource<Date>();
  public displayedColumns = ['date'];
  private user: any;
  private appointment: DTOAppointment = new DTOAppointment();

  constructor(private authService: AuthService,
              private appointmentService: AppointmentService,
              private router: Router, private userService: UserServiceService,
              private ts: TokenService) {
  }


  ngOnInit(): void {
    this.id = Number(this.ts.getIdFromToken());
    // this.userService.getPatientById(this.id).subscribe({
    //   next: res => {
    //     this.user = res;
    //     console.log(this.user)
    //     this.patient = `${this.user.firstName}  ${this.user.lastName}`;
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
  }

  chooseTime(object: Object) {

  }

  Generate() {

  }
}
