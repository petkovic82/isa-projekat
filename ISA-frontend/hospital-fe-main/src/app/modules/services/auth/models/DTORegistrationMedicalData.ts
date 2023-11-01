export enum UserType {
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  ADMIN = 'ADMIN',
}

export class DTORegistrationMedicalData {
  email: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";

  name: string = "";
  surname: string = "";
  patientId: number = 0;
  appointmentId: number = 0;
  id: number = 0;
  deleted: boolean = false;
  userType: number = 0;
  primaryCareDoctorId: number = 1;
  cancelCount: number = 0;
  blocked: boolean = false;
  bloodSugar: number = 0;
  enabled: boolean = true;
  specialization: number = 0;
  createdAt = new Date();
  cycleStart: Date | undefined = new Date();
  bloodPressure: string = "";
  fatPercentage: number = 0.0;
  weight: number = 0.0;

  constructor(email: string, password: string,
              name: string,  surname: string, gender: number, userType: number) {
    this.email = email;
    this.password = password;
    this.firstName = name;
    this.lastName = surname;
    this.bloodSugar = gender;
    this.userType = userType;
  }
}
