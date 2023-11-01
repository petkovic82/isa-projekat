export class DTOAppointment {
    id: number = 0;
    number: string = '';
    floor: number = 0;
  patientId: number = 0;
  doctorId: number | null = 0;
  deleted: boolean = false;
  startTime = new Date();
  endTime = new Date();

  date = new Date();
    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.number = obj.number;
            this.floor = obj.floor;
        }
    }
}
