 using System;
 using System.Collections.Generic;
using System.Linq;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Settings;
using Microsoft.EntityFrameworkCore;

namespace HospitalLibrary.Core.Repository
{
    public class EquipmentRepository : IEquipmentRepository
    {
        private readonly HospitalDbContext _context;

        public EquipmentRepository(HospitalDbContext context)
        {
            _context = context;
        }
        public List<Equipment> SearchByNameOrCompany(string searchQuery)
        {
            return _context.Equipment
                .Where(e => e.Name.Contains(searchQuery) || e.CompanyName.Contains(searchQuery))
                .ToList();
        }

        public IEnumerable<Equipment> GetByCompanyId(int id)
        {
            return _context.Equipment.Where(e => e.CompanyId == id);
        }

        public List<Equipment> SearchByNameInCompany(string searchQuery, int companyId)
        {
            return _context.Equipment
                .Where(e => e.Name.Contains(searchQuery) && e.CompanyId == companyId)
                .ToList();
        }

        public IEnumerable<Equipment> GetAll()
        {
            return _context.Equipment.ToList();
        }

        public Equipment GetById(int id)
        {
            return _context.Equipment.Find(id);
        }

        public void Create(Equipment room)
        {
            _context.Equipment.Add(room);
            _context.SaveChanges();
        }

        public void Update(Equipment room)
        {
            _context.Entry(room).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(Equipment room)
        {
            _context.Equipment.Remove(room);
            _context.SaveChanges();
        }
    }
}