using System.ComponentModel.DataAnnotations;

namespace HospitalLibrary.Core.Model
{
    public class Equipment
    {
        [Key]
        int Id { get; set; }
        int CompanyId { get; set; }
        string Name { get; set; }
    }
}