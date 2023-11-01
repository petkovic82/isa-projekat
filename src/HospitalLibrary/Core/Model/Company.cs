using System.ComponentModel.DataAnnotations;

namespace HospitalLibrary.Core.Model
{
    public class Company
    {
        [Key]
        int Id { get; set; }
        string Name { get; set; }
    }
}