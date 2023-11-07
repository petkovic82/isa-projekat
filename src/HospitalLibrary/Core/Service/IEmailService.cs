using System.Drawing;
using System.Threading.Tasks;

namespace HospitalLibrary.Core.Service
{
    public interface IEmailService
    {
        Task<bool> SendConfirmationEMail(string mail, string name, string token);
        Task<bool> AppointmentConfirmationMail(string mail, Bitmap qrCodeImage);
        
    }
}