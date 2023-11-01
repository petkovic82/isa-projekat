using System;
using System.ComponentModel.DataAnnotations;

namespace HospitalLibrary.Core.Model
{
    public class Appointment
    {
        [Key]
        int Id { get; set; }
        int EmployeeId { get; set; }
        int EquipmentId { get; set; }
        State State { get; set; }
        DateTime CreatedAt { get; set; }
    }
}