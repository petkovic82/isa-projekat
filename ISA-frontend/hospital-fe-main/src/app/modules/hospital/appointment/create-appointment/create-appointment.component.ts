import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../services/auth/services/token.service";
import {ServiceService} from "../../../services/service.service";
import {CreateAppointmentDto} from "../../../dto/createAppointmentDto";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  companyId: number = 0;

  equipmentId: string = '';
  date: Date = new Date();
  time: any;

  dto = new CreateAppointmentDto(0, '');
  appointmentDate: any;

  constructor(private authService: AuthService,
              private router: Router,
              private ts: TokenService,
              private Service: ServiceService) {
  }

  equipment = [
    {
      id: 'Card 1 Title',
      name: 'Lorem ipsum for card 1...',
    }
  ];

  ngOnInit(): void {

    this.Service.getCurrentUser(Number(this.ts.getId())).subscribe((user) => {
      this.companyId = user.companyId;

      this.Service.getEquipmentByCompanyId(this.companyId).subscribe((data: any) => {
        this.equipment = data;
      });
    });
  }


  create() {
    this.dto.equipmentId = Number(this.equipmentId);
    this.dto.date = String(this.date);

    this.Service.createAppointment(this.dto).subscribe({
      next: (res: any) => {
        alert("You have successfully created appointment with Id :"+res.id)
      },
      error: (err: any) => {
        alert('Error');
      }
    });
  }
}
