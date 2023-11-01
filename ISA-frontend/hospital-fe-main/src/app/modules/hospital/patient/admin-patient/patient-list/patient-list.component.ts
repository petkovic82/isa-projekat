import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DTOAppointment} from "../../../../model/room.model";
import {RoomService} from "../../../../services/room.service";
import {Router} from "@angular/router";
import {UsersService} from "../../../../services/service/users.service";
import {DTORegistrationMedicalData} from "../../../../services/auth/models/DTORegistrationMedicalData";


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  public dataSource = new MatTableDataSource<DTORegistrationMedicalData>();
  public displayedColumns = ['name', 'surname', 'email', 'username', 'blocked'];
  public patients: DTORegistrationMedicalData[] = [];


  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllPatients().subscribe(res => {
      this.patients = res;
      this.dataSource.data = this.patients;
    })
  }


  public block(id: number) {
    this.userService.blockPatient(id).subscribe(res => {
      this.userService.getAllPatients().subscribe(res => {
        this.patients = res;
        this.dataSource.data = this.patients;
      })
    })
  }
  public unblock(id: number) {
    this.userService.unblockPatient(id).subscribe(res => {
      this.userService.getAllPatients().subscribe(res => {
        this.patients = res;
        this.dataSource.data = this.patients;
      })
    })
  }

}
