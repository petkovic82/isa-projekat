using System;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.DTOs;

public class AppointmentDto
{
    public int Id { get; set; }
    public int EmployeeId { get; set; }
    public string EmployeeFullName { get; set; }
    public int EquipmentId { get; set; }
    
    public string EquipmentName { get; set; }
    public int Quantity  { get; set; }
        
    public double Price  { get; set; }
    public State State { get; set; }
    public DateTime Date { get; set; }
}