import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarModule} from "../hospital/navbar/navbar.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [
    HomeComponent,
    LogInComponent,
    RegistrationComponent,
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NavbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MaterialModule,
    ]
})
export class PagesModule { }
