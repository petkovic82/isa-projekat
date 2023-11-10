import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../hospital/navbar/services/token.service";
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  firstName: any;
  lastName: any;
  penaltyCount: number = 0;
  role: number = 0;
  company:any;

  constructor(private authService: AuthService,
              private router: Router, private ts: TokenService,
              private Service: ServiceService) {
  }

  ngOnInit(): void {
    this.Service.getCurrentUser(Number(this.ts.getId())).subscribe((user) => {
      this.firstName = user.firstName ;
      this.lastName = user.lastName ;
      this.penaltyCount  = user.cancelCount
      this.role = user.userRole

    });
  }

}
