import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/services/auth.service";
import {Router} from "@angular/router";
import {ServiceService} from "../../services/service.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataSource = new MatTableDataSource<any>();
  public displayedColumns = ['name', 'companyName', 'quantity' ];

  company = [
    {
      id: 'Card 1 Title',
      name: 'Lorem ipsum for card 1...',
    }
  ];


  searchCompany: string = '';
  searchEquipment: string = '';

  public allEquipment = new MatTableDataSource<any>();

  constructor(private Service: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.Service.getAllCompanies().subscribe((data: any) => {
      this.company = data;
    });

    this.Service.getAllEquipment().subscribe((data: any) => {
      this.dataSource = data;
      this.allEquipment = this.dataSource;
    });
  }

  SearchEquipment() {

    this.Service.searchEquipmentByNameOrCompany(this.searchEquipment).subscribe((equipment) => {
      this.dataSource = equipment;
    });
    if(this.searchEquipment===""){
      this.Service.getAllEquipment().subscribe((data: any) => {
        this.dataSource = data;
        this.allEquipment = this.dataSource;
      });
    }
  }

  SearchCompany() {
    console.log(this.searchCompany)
    this.Service.searchCompaniesByName(this.searchCompany).subscribe((data) => {
      this.company = data;
    });
    if(this.searchCompany===""){
      this.Service.getAllCompanies().subscribe((data: any) => {
        this.company = data;
      });
    }
  }
}
