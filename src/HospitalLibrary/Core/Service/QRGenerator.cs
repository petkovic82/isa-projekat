using System.Drawing;
using HospitalLibrary.Core.DTOs;
using QRCoder;
using QRCode = QRCoder.QRCode;

namespace HospitalLibrary.Core.Service
{
    public class QrGenerator
    {
        public Bitmap GenerateQrCode(AppointmentDto appointment)
        {
            var appointmentInfo = $"Appointment Details:\n" +
                                  $"Appointment ID: {appointment.Id}\n" +
                                  $"Employee ID: {appointment.EmployeeId}\n" +
                                  $"Employee full name: {appointment.EmployeeFullName}\n" +
                                  $"Equipment ID: {appointment.EquipmentId}\n" +
                                  $"Equipment name: {appointment.EquipmentName}\n" +
                                  $"Quantity: {appointment.Quantity}\n" +
                                  $"Price: {appointment.Price}\n" +
                                  $"State: {appointment.State.ToString()}\n" +
                                  $"Date: {appointment.Date.ToString("yyyy-MM-dd HH:mm:ss")}\n";


            var qrGenerator = new QRCodeGenerator();
            var qrCodeData = qrGenerator.CreateQrCode(appointmentInfo, QRCodeGenerator.ECCLevel.Q);
            var qrCode = new QRCode(qrCodeData);
            return qrCode.GetGraphic(20);
        }
    }
}