using System.Drawing;
using System.Threading.Tasks;
using HospitalLibrary.Core.DTOs;

namespace HospitalLibrary.Core.Service
{
    public interface IEmailService
    {
        Task<bool> SendConfirmationEMail(string mail, string name, string token);

        Task<bool> SendQrMail(string userEmail, string userFirstName, AppointmentDto dto);
    }
}