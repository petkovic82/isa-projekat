using System;
using System.ComponentModel.DataAnnotations;

namespace HospitalLibrary.Core.Model
{
    public class Appointment
    {
        [Key]
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public int EquipmentId { get; set; }
        public State State { get; set; }
        public DateTime Date { get; set; }
    }
}