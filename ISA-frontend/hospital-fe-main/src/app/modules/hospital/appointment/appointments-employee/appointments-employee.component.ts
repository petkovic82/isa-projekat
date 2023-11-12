import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DTOAppointment} from "../../../model/room.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentService} from "../../../services/appointment.service";
import {AuthService} from "../../../services/auth/services/auth.service";
import {TokenService} from "../../navbar/services/token.service";
import {ServiceService} from "../../../services/service.service";

@Component({
  selector: 'app-appointments-employee',
  templateUrl: './appointments-employee.component.html',
  styleUrls: ['./appointments-employee.component.css']
})
export class AppointmentsEmployeeComponent implements OnInit {

  public dataSource = new MatTableDataSource<DTOAppointment>();
  public displayedColumns = ['number', 'floor','quantity', 'price','state', 'date'];
  public appointments: DTOAppointment[] = [];
  private id: any;

  constructor(private authService: AuthService,
              private router: Router,
              private ts: TokenService,
              private Service: ServiceService){}

  ngOnInit(): void {

    this.id = this.ts.getIdFromToken()


    this.Service.getAppointmentsByEmployeeId(this.id).subscribe(res => {
      this.appointments = res;
      this.dataSource.data = this.appointments;
    })
  }
  cancel(equipmentId : any) {
    this.Service.cancelAppointment(equipmentId).subscribe(res => {
      this.Service.getAppointmentsByEmployeeId(this.id).subscribe(res => {
        this.appointments = res;
        this.dataSource.data = this.appointments;
      })
    })
  }
}
