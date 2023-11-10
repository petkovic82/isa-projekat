using System.Collections.Generic;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Repository
{
    public interface IAppointmentRepository
    {
        
        Appointment GetById(int id);
        void Create(Appointment room);
        void Update(Appointment room);
        object GetCreatedByEquipmentId(int id);
        public object GetByEmployeeId(int id);
        object FindByEmployeeIdAndTime(AppointmentDto dto);
    }
}