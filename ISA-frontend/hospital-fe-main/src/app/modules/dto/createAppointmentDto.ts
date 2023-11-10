export class CreateAppointmentDto {
  id: number = 0;
  date: string = '';
  equipmentId: number = 0;
  appointmentId: number = 0;

  public constructor(number: number, s: string) {
    this.id = number
    this.date = s
  }
}
