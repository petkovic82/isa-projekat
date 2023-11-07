using System.Collections.Generic;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Repository;

namespace HospitalLibrary.Core.Service
{
    public class CompanyService : ICompanyService
    {

        private readonly ICompanyRepository _companyRepository;

        public CompanyService(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        public IEnumerable<Company> GetAll()
        {
            return _companyRepository.GetAll();
        }

        public List<Company> SearchByName(string searchQuery)
        {
            return _companyRepository.SearchByName(searchQuery);
        }
    }
}