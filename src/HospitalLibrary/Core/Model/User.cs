using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HospitalLibrary.Core.Model
{
    public class User
    {

        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public Role UserRole { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }
        public string Job { get; set; }
        public int CompanyId { get; set; }
        public bool Activated { get; set; }
        public int CancelCount { get; set; }
        public string ConfirmationToken { get; set; }
    }
}