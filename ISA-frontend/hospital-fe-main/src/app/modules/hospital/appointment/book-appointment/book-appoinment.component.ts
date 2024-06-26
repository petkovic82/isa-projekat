import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../../services/auth/services/token.service";
import {ServiceService} from "../../../services/service.service";
import {CreateAppointmentDto} from "../../../dto/createAppointmentDto";


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appoinment.component.html',
  styleUrls: ['./book-appoinment.component.css']
})
export class BookAppoinment implements OnInit {

  companyId: number = 0;

  equipmentId: string = '';
  chosenAppointment: any;
  date: Date = new Date();
  time: any;
  equipment: any
  quantityMax: any
  quantity: any
  name: any;
  companyName: any;
  dto = new CreateAppointmentDto(0, '');

  employeeId: number = 0;

  constructor(private authService: AuthService,
              private router: Router,
              private actRoute: ActivatedRoute,
              private ts: TokenService,
              private Service: ServiceService) {
  }

  formatAppointmentDate(dateString: string): string {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  }

  appointments = [
    {
      date: '',
    }
  ];


  ngOnInit(): void {

    this.employeeId = Number(this.ts.getIdFromToken());
    this.actRoute.params.subscribe(params => {
      this.equipmentId = params['id'];
    })

    this.Service.getEquipmentById(this.equipmentId).subscribe({
      next: (res: any) => {
        this.name = res.name
        this.companyName = res.companyName;
        this.quantityMax = res.quantity
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    this.Service.getAppointmentByEquipmentId(Number(this.equipmentId)).subscribe({
      next: (res: any) => {
        this.appointments = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }


  book() {

    if (this.quantityMax < this.quantity){
      alert("Not enough in stock!")
      return;
    }

    if (this.quantity < 1){
      alert("You have to book 1 or more!")
      return;
    }
    if (!this.quantity || !this.chosenAppointment){
      alert("You have to fill out every field!")
      return;
    }


    this.chosenAppointment.employeeId = this.employeeId
    this.chosenAppointment.quantity = this.quantity;

    this.Service.bookAppointment(this.chosenAppointment).subscribe({
      next: (res: any) => {
        alert("You have successfully booked appointment with Id :" + res.id + '. Check your email for more info!')
        this.router.navigate(['/all-appointments'])
      },
      error: (err: any) => {
        alert('Cant book in same company at the same time');
      }
    });
  }
}
