using System.Collections.Generic;
using System.Linq;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Settings;
using Microsoft.EntityFrameworkCore;

namespace HospitalLibrary.Core.Repository
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly HospitalDbContext _context;

        public CompanyRepository(HospitalDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Company> GetAll()
        {
            return _context.Company.ToList();
        }

        public Company GetById(int id)
        {
            return _context.Company.Find(id);
        }

        public void Create(Company room)
        {
            _context.Company.Add(room);
            _context.SaveChanges();
        }

        public void Update(Company room)
        {
            _context.Entry(room).State = EntityState.Modified;

            _context.SaveChanges();
        }

        public void Delete(Company room)
        {
            _context.Company.Remove(room);
            _context.SaveChanges();
        }
        public List<Company> SearchByName(string searchQuery)
        {
            return _context.Company
                .Where(e => e.Name.Contains(searchQuery))
                .ToList();
        }
    }
}