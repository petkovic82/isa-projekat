import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DTOAppointment} from "../../../model/room.model";
import {RoomService} from "../../../services/room.service";
import {ActivatedRoute} from "@angular/router";
import {AppointmentService} from "../../../services/appointment.service";

@Component({
  selector: 'app-appointments-patient',
  templateUrl: './appointments-patient.component.html',
  styleUrls: ['./appointments-patient.component.css']
})
export class AppointmentsPatientComponent implements OnInit {

  public dataSource = new MatTableDataSource<DTOAppointment>();
  public displayedColumns = ['number', 'floor'];
  public appointments: DTOAppointment[] = [];
  private id: any;

  constructor(private appService: AppointmentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];})


    this.appService.getAppointmentByPatientId(this.id).subscribe(res => {
      this.appointments = res;
      this.dataSource.data = this.appointments;
    })
  }

}
