using System;
using System.Collections.Generic;
using System.Linq;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Settings;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace HospitalLibrary.Core.Repository
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly HospitalDbContext _context;

        public AppointmentRepository(HospitalDbContext context)
        {
            _context = context;
        }
        
        public Appointment GetById(int id)
        {
            return _context.Appointments.Find(id);
        }

        public void Create(Appointment room)
        {
            _context.Appointments.Add(room);
            _context.SaveChanges();
        }

        public void Update(Appointment room)
        {
            _context.Entry(room).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Book(Appointment bookedAppointment)
        {
            var existingAppointment = _context.Appointments.Find(bookedAppointment.Id);

            if (existingAppointment == null) return;
            if (existingAppointment.RowVersion == bookedAppointment.RowVersion)
            {
                existingAppointment.RowVersion = Guid.NewGuid();
                _context.Entry(existingAppointment).CurrentValues.SetValues(bookedAppointment);
                _context.SaveChanges();
            }
            else
            {
                throw new DbUpdateConcurrencyException("Concurrency conflict detected");
            }
        }

        public object GetCreatedByEquipmentId(int id)
        {
            return _context.Appointments.Where(a => a.EquipmentId == id && a.State == State.Available);
        }

        public object GetByEmployeeId(int id)
        {
            return _context.Appointments.Where(a => a.EmployeeId == id);
        }

        public object FindByEmployeeIdAndTime(AppointmentDto dto)
        {
            return _context.Appointments.Where(a => a.EmployeeId == dto.EmployeeId
                                                    && a.Date == dto.Date).ToList();
        }
    }
}