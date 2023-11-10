using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Threading.Tasks;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace HospitalLibrary.Core.Service
{
    public class EmailService : IEmailService
    {
        private readonly MailSettings _mailSettings;

        private readonly QrGenerator _generator;
        public EmailService(IOptions<MailSettings> mailSettings, QrGenerator generator)
        {
            _mailSettings = mailSettings.Value;
            _generator = generator;
        }


        public async Task<bool> SendConfirmationEMail(string mail, string name, string token)
        {
            try
            {
                var mailText = "Hello [username],\n\n" +
                               "Thank you for registering with us. " +
                               "Please click the following link to confirm your registration: [confirmation_link]";
                mailText = mailText.Replace("[username]", name)
                    .Replace("[confirmation_link]", GetConfirmationLink(token));

                var email = new MimeMessage();
                email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
                email.To.Add(MailboxAddress.Parse(mail));
                email.Subject = $"Hello {name}";

                var builder = new BodyBuilder();
                builder.HtmlBody = mailText;
                email.Body = builder.ToMessageBody();

                using var smtp = new SmtpClient();
                await smtp.ConnectAsync(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
                await smtp.AuthenticateAsync(_mailSettings.Mail, _mailSettings.Password);
                await smtp.SendAsync(email);
                await smtp.DisconnectAsync(true);

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to send email: {ex.Message}");
                return false;
            }
        }

        public async Task<bool> SendQrMail(string userEmail, string userFirstName, AppointmentDto dto)
        {
           
            try
            {
                var mailText = "Hello [userFirstName],\n\n" +
                                        "Thank you for booking appointment. Your appointment ID is [appointmentId]." +
                                        "Equipment name [equipmentName] with ID [equipmentId] - quantity [quantity]." +
                                        "Total price is [price]" +
                                        "Date of appointent : [date]";
                
                mailText = mailText.Replace("[userFirstName]", userFirstName)
                    .Replace("[appointmentId]", dto.Id.ToString())
                    .Replace("[equipmentName]", dto.EquipmentName)
                    .Replace("[equipmentId]", dto.EquipmentId.ToString())
                    .Replace("[quantity]", dto.Quantity.ToString())
                    .Replace("[price]", dto.Price.ToString())
                    .Replace("[date]", dto.Date.ToString("yyyy-MM-dd HH:mm:ss"));
                
                var email = new MimeMessage();
                email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
                email.To.Add(MailboxAddress.Parse(userEmail));
                email.Subject = $"Hello";

                var builder = new BodyBuilder();
                builder.HtmlBody = mailText;

                // Generate QR code
                var qrCodeBitmap = _generator.GenerateQrCode(dto);

                // Convert QR code Bitmap to byte array
                var stream = new MemoryStream();
                qrCodeBitmap.Save(stream, ImageFormat.Png);
                stream.Position = 0;

                // Attach QR code to the email
                var attachment = new MimePart("image", "png")
                {
                    Content = new MimeContent(stream),
                    ContentDisposition = new ContentDisposition(ContentDisposition.Attachment),
                    ContentTransferEncoding = ContentEncoding.Base64,
                    FileName = "qr_code.png"
                };

                builder.Attachments.Add(attachment);
                email.Body = builder.ToMessageBody();

                using var smtp = new SmtpClient();
                await smtp.ConnectAsync(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
                await smtp.AuthenticateAsync(_mailSettings.Mail, _mailSettings.Password);
                await smtp.SendAsync(email);
                await smtp.DisconnectAsync(true);

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to send email: {ex.Message}");
                return false;
            }
        }


        private static string GetConfirmationLink(string token)
    {
        return $"http://localhost:16177/api/Users/confirmRegistration?token={token}";
    }
}

}