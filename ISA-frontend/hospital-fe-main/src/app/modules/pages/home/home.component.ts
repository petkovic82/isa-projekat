import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  company = [
    {
      id: 'Card 1 Title',
      companyName: 'Lorem ipsum for card 1...',
    },
    {
      id: 'Card 2 Title',
      companyName: 'Lorem ipsum for card 2...',
    },
    {
      id: 'Card 3 Title',
      companyName: 'Lorem ipsum for card 2...',
    },
    {
      id: 'Card 4 Title',
      companyName: 'Lorem ipsum for card 2...',
    },
    {
      id: 'Card 5 Title',
      companyName: 'Lorem ipsum for card 2...',
    }
  ];

  equipment = [
    {
      id: 'Card 1 Title',
      equipmentName: 'Lorem ipsum for card 1...',
    },
    {
      id: 'Card 2 Title',
      equipmentName: 'Lorem ipsum for card 2...',
    },
  ];

  searchCompany: string = '';
  searchEquipment: string = '';

  constructor() {
  }

  ngOnInit(): void {

   this.company.length
  }

}
