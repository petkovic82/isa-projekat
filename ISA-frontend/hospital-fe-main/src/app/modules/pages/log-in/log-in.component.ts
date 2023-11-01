import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../hospital/navbar/services/token.service";
import {AuthService} from "../../services/auth/services/auth.service";
// @ts-ignore
import {UserDto} from "../../dto/userDto";
//import {SignInRequestPayload} from "./login-request";
import {LoginRequest} from "../../services/auth/dtos/login-request";
import {UserServiceService} from "../../services/user.service.service";
import {UsersService} from "../../services/service/users.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: LoginRequest;

  loginForm!: FormGroup;
  isExist: boolean = false;

  constructor(private authService: AuthService,
              private router: Router,
              private ts:TokenService,
              private route: ActivatedRoute,
              private userService: UsersService) {
    this.user = {
      username:'',
      password: ''
    }
  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.minLength(2)),
      password: new FormControl()
    })
  }

  username: string = ''
  login() {
    console.log(this.user)
    this.authService.signIn(this.user).subscribe({next: data => {

        this.isExist = false;

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

          if(data.role===1){
            this.router.navigate(['/blog'])
          }else{
            if(data.role==2)
              this.router.navigate(['/patients'])
          }

        this.router.navigate(['/appointment-create'])
      }, error:error => {
        console.log(error)
        if (error['status'] == 403) {
          this.isExist = true;
        }
      }});

  }
  register() {
    this.router.navigate(['/register']);
  }

}
