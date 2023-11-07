using System.Collections.Generic;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Service
{
    public interface ICompanyService
    {
        IEnumerable<Company> GetAll();
        public List<Company> SearchByName(string searchQuery);
    }
}