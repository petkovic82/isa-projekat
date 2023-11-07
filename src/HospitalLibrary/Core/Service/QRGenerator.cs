using HospitalLibrary.Core.Model;
using ZXing;
using ZXing.QrCode;
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using Newtonsoft.Json;
using QRCoder;

namespace HospitalLibrary.Core.Service
{
    public class QRGenerator 
    {
    
        public Bitmap GenerateQRCodeCreateQRCode(Appointment appointment)
        {
            string iCalendarData = GenerateICalendarString(appointment);

            
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(iCalendarData, QRCodeGenerator.ECCLevel.Q);

           
            QRCode qrCode = new QRCode(qrCodeData);

            
            Bitmap qrCodeImage = qrCode.GetGraphic(20);

            return qrCodeImage;
        }
        
        public static string GenerateICalendarString(Appointment appointment)
        {
            return $"EQUIPMENTID:{appointment.EquipmentId}\r\n" +
                   $"CREATEDAT:{appointment.Date:yyyyMMddTHHmmssZ}\r\n" +
                   $"STATE:{appointment.State:yyyyMMddTHHmmssZ}\r\n" +
                   $"EMPLOYEEID:{appointment.EmployeeId}\r\n";
        }
        
    }
    
}