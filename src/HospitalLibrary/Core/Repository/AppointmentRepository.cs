using System.Collections.Generic;
using System.Linq;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Settings;
using Microsoft.EntityFrameworkCore;

namespace HospitalLibrary.Core.Repository
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly HospitalDbContext _context;

        public AppointmentRepository(HospitalDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Appointment> GetAll()
        {
            return _context.Appointments.ToList();
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

        public void Delete(Appointment room)
        {
            _context.Appointments.Remove(room);
            _context.SaveChanges();
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