using System.Collections.Generic;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Repository
{
    public interface ICompanyRepository
    {
        IEnumerable<Company> GetAll();
        Company GetById(int id);
        void Create(Company room);
        void Update(Company room);
        void Delete(Company room);
        public List<Company> SearchByName(string searchQuery);
    }
}