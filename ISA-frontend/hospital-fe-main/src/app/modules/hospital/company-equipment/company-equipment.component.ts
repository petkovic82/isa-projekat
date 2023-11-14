import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/auth/services/token.service";
import {ServiceService} from "../../services/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-company-equipment',
  templateUrl: './company-equipment.component.html',
  styleUrls: ['./company-equipment.component.css']
})
export class CompanyEquipmentComponent implements OnInit {
  private companyId: any;
  private id: any;
  public dataSource = new MatTableDataSource<any>();
  public displayedColumns = ['name', 'companyName', 'quantity' ];
  searchEquipment: string = '';
  public allEquipment = new MatTableDataSource<any>();

  constructor(private ts: TokenService, private service: ServiceService, private router: ActivatedRoute, private rout: Router) {
  }

  ngOnInit(): void {

    this.router.params.subscribe(params => {
      this.companyId = params['id'];
    })
    this.id = this.ts.getIdFromToken()

    this.service.getEquipmentByCompanyId(this.companyId).subscribe((data: any) => {
      this.dataSource = data;
      this.allEquipment = this.dataSource;
    });
  }

  SearchEquipment() {
    console.log(this.searchEquipment)
    this.service.searchEquipmentByNameInCompany(this.searchEquipment, this.companyId).subscribe((equipment) => {
      this.dataSource = equipment;
    });
    if(this.searchEquipment===""){
      this.service.getEquipmentByCompanyId(this.companyId).subscribe((data: any) => {
        this.dataSource = data;
        this.allEquipment = this.dataSource;
      });
    }
  }

  book(equipmentId : any) {
    this.rout.navigate(['/equipment-appointment/'+ equipmentId]);
  }
}
