using System.Collections.Generic;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Repository;

namespace HospitalLibrary.Core.Service
{
    public class EquipmentService : IEquipmentService
    {        
        private readonly IEquipmentRepository _equipmentRepository;
        private readonly ICompanyRepository _companyRepository;

        public EquipmentService(IEquipmentRepository equipmentRepository, ICompanyRepository companyRepository)
        {
            _equipmentRepository = equipmentRepository;
            _companyRepository = companyRepository;
        }

        public IEnumerable<Equipment> GetAll()
        {
            return _equipmentRepository.GetAll();
        }

        public List<Equipment> SearchByNameOrCompany(string searchQuery)
        {
            return _equipmentRepository.SearchByNameOrCompany(searchQuery);
        }
        

        public IEnumerable<Equipment> GetByCompanyId(int id)
        {
            return _equipmentRepository.GetByCompanyId(id);
        }

        
    }
}