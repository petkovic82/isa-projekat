using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Repository;

namespace HospitalLibrary.Core.Service
{
    public class AppointmentService : IAppointmentService
    {
        private readonly IAppointmentRepository _appointmentRepository;
        
        private readonly IUserRepository _userRepository;
        private readonly IEquipmentRepository _equipmentRepository;

        public AppointmentService(IAppointmentRepository appointmentRepository
            , IEquipmentRepository companyRepository, IUserRepository userRepository)
        {
            _appointmentRepository = appointmentRepository;
            _userRepository = userRepository;
            _equipmentRepository = companyRepository;
        }

        public void Create(Appointment newApp)
        {
            _appointmentRepository.Create(newApp);
        }

        public object GetCreatedByEquipmentId(int id)
        {
            return _appointmentRepository.GetCreatedByEquipmentId(id);
        }
        public object GetByEmployeeId(int id)
        {
            return _appointmentRepository.GetByEmployeeId(id);
        }
        public Appointment GetById(int id)
        {
            return _appointmentRepository.GetById(id);
        }

        public void Update(Appointment app)
        {
            _appointmentRepository.Update(app);
        }

        public void Cancel(int appId)
        {
            var app =_appointmentRepository.GetById(appId);
            
            app.State = State.Created;
            app.EmployeeId = 0;
            app.Quantity = 0;
            IncreaseCancelCount(app);
            Update(app);
        }

        public bool CanEmployeeBook(AppointmentDto dto)
        {
            var existing = _appointmentRepository.FindByEmployeeIdAndTime(dto);
            var companyId = _equipmentRepository.GetById(dto.EquipmentId).CompanyId;

            foreach (Appointment app in (IEnumerable)existing)
            {
                var matchingCompanyId = _equipmentRepository.GetById(app.EquipmentId).CompanyId;
                if (companyId == matchingCompanyId)
                {
                    return false;
                }
            }
            return true;
        }

        private void IncreaseCancelCount(Appointment app)
        {
            var user =_userRepository.GetById(app.EmployeeId);
            if (DateTime.Today.AddHours(24) == app.Date)
            {
                user.CancelCount =+ 2;
            }
            else
            {
                user.CancelCount =+ 1;
            }

            _userRepository.Update(user);
        }
    }
}