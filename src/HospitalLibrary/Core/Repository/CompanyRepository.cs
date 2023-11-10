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
        

        public List<Company> SearchByName(string searchQuery)
        {
            return _context.Company
                .Where(e => e.Name.Contains(searchQuery))
                .ToList();
        }
    }
}