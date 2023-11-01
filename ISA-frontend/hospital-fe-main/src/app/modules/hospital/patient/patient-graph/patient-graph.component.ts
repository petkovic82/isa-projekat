import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from "chart.js";
import {AppointmentService} from "../../../services/appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DTORegistrationMedicalData} from "../../../services/auth/models/DTORegistrationMedicalData";
import {AuthService} from "../../../services/auth/services/auth.service";
import {UserServiceService} from "../../../services/user.service.service";
import {map} from "rxjs";
@Component({
  selector: 'app-patient-graph',
  templateUrl: './patient-graph.component.html',
  styleUrls: ['./patient-graph.component.css']
})
export class PatientGraphComponent implements OnInit, AfterViewInit {

  data = [
    { date: '21.8.2023.',  name: '45', barHeight: 4 },
    { date: '21.8.2023.' , name: '45', barHeight: 34 },
    { date: '21.8.2023.',  name: ' 45', barHeight: 75 },
    { date: '21.8.2023.' , name: '45', barHeight: 4 },
    { date: '21.8.2023.',  name: ' 45', barHeight: 100 },
    { date: '21.8.2023.' , name: '45', barHeight: 75 },
  ];

  MedicalData = [
    { id: '1', name: 'Ana Kesic' },];

  private id!: number;
  cycleStart: Date | undefined;
  bloodSugar: number = 0;
  fatPercentage: number = 0;
  weight: number = 0;
  bloodPressure: any;

  medicalData = new DTORegistrationMedicalData('', '','','',0, 1);

  constructor(private appService: AppointmentService, private router: ActivatedRoute, private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    })

    //sredi grafik po nekom svojstvu
    this.appService.getLastSixEntriesForPatient(this.id).subscribe({
      next: res => {
        if (Array.isArray(res)) {
          const data = res.map((medicalData: { id: any; firstName: any; lastName: any; }) => {
            return ({
              id: medicalData.id.toString(),
              name:  `${medicalData.firstName}  ${medicalData.lastName}`
            });
          });
          this.MedicalData = data;
          console.log(data);
        } else {
          const data = {
            id: res.id.toString(),
            name: `${res.firstName} ${res.lastName}`
          };
          this.MedicalData = [data];
          console.log(data);
        }
      },
      error: err => {
        console.log(err);
      }
    })

  }




  selectedMonthIndex = 4;
  ngAfterViewInit() {

  }

  createMedicalData() {
    this.medicalData.bloodSugar = parseFloat(String(this.bloodSugar));
    this.medicalData.fatPercentage = parseFloat(String(this.fatPercentage));
    this.medicalData.weight = parseFloat(String(this.weight));
    this.medicalData.bloodPressure = this.bloodPressure;
    this.medicalData.createdAt = new Date;
    this.medicalData.cycleStart = this.cycleStart;
    this.medicalData.patientId = this.id;
    console.log(this.medicalData)

    this.appointmentService.createMedicalData(this.medicalData).subscribe({
      next: res => {
        alert("Your medical data is successfully saved! ");
      },
      error: err => {
        alert("Something went wrong! :(")
        console.log(err);
      }
    });

  }
}
