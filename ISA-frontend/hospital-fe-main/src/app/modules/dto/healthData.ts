export class DTOHealthData {
  id: number = 0;
  BloodPresure: string = '';
  BloodSugar: number = 0;
  BodyFatPercentage: number = 0;
  Weight: number = 0;
  MeasurementTime: string = '';

  date = new Date();
  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.BloodPresure = obj.BloodPresure;
      this.BloodSugar = obj.BloodSugar;
      this.BodyFatPercentage = obj.BodyFatPercentage;
      this.Weight = obj.Weight;
      this.MeasurementTime = obj.MeasurementTime;
    }
  }
}
