export enum UserType {
  EMPLOYEE = 'EMPLOYEE',
  COMPANYADMIN = 'COMPANYADMIN',
  SYSTEMADMIN = 'SYSTEMADMIN',
}

export class DTORegistrationMedicalData {
  email: string = "";
  username: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  userRole: number = 0;
  city: string = "";
  country: string = "";
  job: string = "";
  phoneNumber: string = "";
  companyId: number = 0;
  cancelCount: number = 0;
  name: string = "";
  id: number = 0;
  deleted: boolean = false;
  blocked: boolean = false;
  enabled: boolean = true;
  weight: number = 0.0;

  constructor(
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    userRole: number,
    city: string,
    country: string,
    job: string,
    phoneNumber: string,
    companyId: number,
    cancelCount: number
  ) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userRole = userRole;
    this.city = city;
    this.country = country;
    this.job = job;
    this.phoneNumber = phoneNumber;
    this.companyId = companyId;
    this.cancelCount = cancelCount;
  }
}
