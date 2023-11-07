using System;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.DTOs
{
    public class RegistrationDto
    {
        public string Password { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public Role Role { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }
        public string Job { get; set; }
        public int CompanyId { get; set; }
    }
}