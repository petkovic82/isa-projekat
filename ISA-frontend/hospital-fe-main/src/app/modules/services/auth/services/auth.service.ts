import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginResponse} from "../dtos/login-response";
import {Router} from "@angular/router";
import {Token} from "../models/token";
import {Observable, Subject, throwError} from "rxjs";
import {DTORegistrationMedicalData} from "../models/DTORegistrationMedicalData";
import {catchError} from "rxjs/operators";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user$: Subject<User | null> = new Subject();
  private user: User | null = null;
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

  private token$: Subject<string | null> = new Subject();
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.loadAuth();
  }

  signIn(signInRequest: any): Observable<any> {
    return this.http.post<any>(
      "http://localhost:16177/api/Authentication/login",
      signInRequest
    );
  }

  register(register: DTORegistrationMedicalData): Observable<any> {
    return this.http
      .post<DTORegistrationMedicalData>("http://localhost:16177/api/users/userRegistration", register, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  logout() {
    this.http
      .get<LoginResponse>("http://localhost:8080/users/logout")
      .subscribe({
        next: (response) => {
          this.clearAuthAndRedirectHome();
        },
        error: (error: Error) => {
          this.clearAuthAndRedirectHome();
        },
      });
  }

  loadAuth() {
    this.loadUser();
    this.loadToken();
  }

  clearAuth() {
    this.clearUser();
    this.clearToken();
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return true;
  }

  isCompanyAdmin() {
    return this.user != null && this.user.roles.includes("COMPANYADMIN");
  }

  isEmployee() {
    return this.user != null && this.user.roles.includes("EMPLOYEE");
  }

  isSystemAdmin() {
    return this.user != null && this.user.roles.includes("SYSTEMADMIN");
  }

  getRole() {
    if (this.isCompanyAdmin()) return "COMPANYADMIN";
    else if (this.isEmployee()) return "EMPLOYEE";
    if (this.isSystemAdmin()) return "SYSTEMADMIN";
    else return "No role";
  }

  private clearAuthAndRedirectHome() {
    this.clearAuth();
    this.redirectHome();
  }

  private extractUser(token: string) {
    const decodedToken: Token = jwtDecode(token);
    const authorities = decodedToken.authorities.map(
      (auth: any) => auth.authority
    );
    return new User(decodedToken.sub, authorities);
  }

  private tokenValid(): boolean {
    if (!this.token) return true;
    const decodedToken: Token = jwtDecode(this.token);

    const expirationDate = new Date((decodedToken.exp as number) * 1000);
    const currentDate = new Date();

    return currentDate > expirationDate;
  }

  private loadUser() {
    const user = window.sessionStorage.getItem("user");
    if (!user) return;

    this.user = JSON.parse(user);
    this.user$.next(this.user);
  }

  private loadToken() {
    const token = window.sessionStorage.getItem("token");
    if (!token) return;

    this.token = token;
    this.token$.next(this.token);
  }


  redirectHome() {
    this.router.navigate([""]);
  }

  private clearUser() {
    window.sessionStorage.removeItem("user");
    this.user = null;
    this.user$.next(this.user);
  }

  private clearToken() {
    window.sessionStorage.removeItem("token");
    this.token = null;
    this.token$.next(this.token);
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
