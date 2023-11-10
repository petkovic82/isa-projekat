import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DTOAppointment} from "../../model/room.model";
import {AppointmentService} from "../../services/appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../services/service.service";
import {TokenService} from "../navbar/services/token.service";

@Component({
  selector: 'app-companies-employee',
  templateUrl: './companies-employee.component.html',
  styleUrls: ['./companies-employee.component.css']
})
export class CompaniesEmployeeComponent implements OnInit {

  public dataSource = new MatTableDataSource<DTOAppointment>();
  public displayedColumns = ['id', 'name'];
  public companies: DTOAppointment[] = [];
  private id: any;

  constructor(private ts: TokenService, private service: ServiceService, private router: ActivatedRoute, private rout: Router) {
  }

  ngOnInit(): void {

    this.id = this.ts.getIdFromToken()

    this.service.getAllCompanies().subscribe(res => {
      this.companies = res;
      this.dataSource.data = this.companies;
    })
  }

  seeAllEquipment(companyId: any) {
    this.rout.navigate(['/company-equipment/'+ companyId]);
  }
}
