using System.Collections.Generic;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Repository
{
    public interface ICompanyRepository
    {
        IEnumerable<Company> GetAll();
        public List<Company> SearchByName(string searchQuery);
    }
}