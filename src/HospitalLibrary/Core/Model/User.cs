using System.ComponentModel.DataAnnotations;

namespace HospitalLibrary.Core.Model
{
    public class User
    {

        [Key]
        int Id { get; set; }
        string Email { get; set; }
        Role UserRole { get; set; }
        string Password { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        string City { get; set; }
        string Country { get; set; }
        string PhoneNumber { get; set; }
        string Job { get; set; }
        string CompanyInfo { get; set; }
        bool Activated { get; set; }
        int CancelCount { get; set; }
    }
}