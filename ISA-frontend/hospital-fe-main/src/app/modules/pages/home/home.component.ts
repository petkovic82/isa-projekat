import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/services/auth.service";
import {Router} from "@angular/router";
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  company = [
    {
      id: 'Card 1 Title',
      name: 'Lorem ipsum for card 1...',
    }
  ];

  equipment = [   {
    id: 'Card 1 Title',
    name: 'Lorem ipsum for card 1...',
    company:{
      name: 'companyName'
    }
  }];

  searchCompany: string = '';
  searchEquipment: string = '';

  constructor(private Service: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
    //this.company.length
    this.Service.getAllCompanies().subscribe((data: any) => {
      this.company = data;
      console.log(data)
    });

    this.Service.getAllEquipment().subscribe((data: any) => {
      this.equipment = data;
      console.log(data)
    });
  }

}
