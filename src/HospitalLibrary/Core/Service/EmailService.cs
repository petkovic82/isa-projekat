using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Threading.Tasks;
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

        public EmailService(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;
        }

       
        


        public async Task<bool> SendConfirmationEMail(string mail, string name, string token)
        {
            try
            {
                var mailText = "Hello [username],\n\n" +
                               "Thank you for registering with us. " +
                               "Please click the following link to confirm your registration: [confirmation_link]";
                mailText = mailText.Replace("[username]", name).Replace("[confirmation_link]", GetConfirmationLink(token));

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

        public async Task<bool> AppointmentConfirmationMail(string mail, Bitmap qrCodeImage)
        {
            try
            {
                const string mailText = "Hello,\n\n" +
                                        "Thank you for registering with us. " ;
               
                var email = new MimeMessage();
                email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
                email.To.Add(MailboxAddress.Parse(mail));
                email.Subject = $"Hello";

                var builder = new BodyBuilder();
                builder.HtmlBody = mailText;

                // Convert the Bitmap image to a byte array
                using var stream = new MemoryStream();
                qrCodeImage.Save(stream, ImageFormat.Png); // Adjust the image format as needed
                var imageBytes = stream.ToArray();

                // Add the QR code image as an attachment
                builder.Attachments.Add("qrcode.png", imageBytes, ContentType.Parse("image/png"));

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