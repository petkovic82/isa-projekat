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
  role: number = 0;
  city: string = "";
  country: string = "";
  job: string = "";
  phoneNumber: number = 0;
  companyId: number = 0;
  cancelCount: number = 0;


  name: string = "";
  surname: string = "";
  patientId: number = 0;
  id: number = 0;
  deleted: boolean = false;
  userType: number = 0;
  primaryCareDoctorId: number = 1;
  blocked: boolean = false;
  bloodSugar: number = 0;
  enabled: boolean = true;
  createdAt = new Date();
  cycleStart: Date | undefined = new Date();
  bloodPressure: string = "";
  fatPercentage: number = 0.0;
  weight: number = 0.0;

  constructor(
    email: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    role: number,
    city: string,
    country: string,
    job: string,
    phoneNumber: number,
    companyId: number,
    cancelCount: number
  ) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.city = city;
    this.country = country;
    this.job = job;
    this.phoneNumber = phoneNumber;
    this.companyId = companyId;
    this.cancelCount = cancelCount;
  }
}
