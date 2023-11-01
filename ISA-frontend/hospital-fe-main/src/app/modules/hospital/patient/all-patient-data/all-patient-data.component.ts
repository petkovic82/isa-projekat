import { Component, OnInit } from '@angular/core';
import {DTOAppointment} from "../../../model/room.model";
import {RoomService} from "../../../services/room.service";
import {ActivatedRoute, Params} from "@angular/router";
import {HealthDataService} from "../../../services/service/health-data.service";
import {DTOHealthData} from "../../../dto/healthData";

@Component({
  selector: 'app-all-patient-data',
  templateUrl: './all-patient-data.component.html',
  styleUrls: ['./all-patient-data.component.css']
})
export class AllPatientDataComponent implements OnInit {

  public healthData: DTOHealthData | undefined;

  constructor(private healthDataService: HealthDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.healthDataService.getHealthDataForUser(params['id']).subscribe(res => {
        this.healthData = res;
      })
    });
  }
}
