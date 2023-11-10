using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Service
{
    public interface IAppointmentService
    {
        void Create(Appointment newApp);
        object? GetCreatedByEquipmentId(int id);
        public object GetByEmployeeId(int id);
        public Appointment GetById(int id);
        void Update(Appointment app);
        void Cancel(int appId);
        bool CanEmployeeBook(AppointmentDto dto);
    }
}