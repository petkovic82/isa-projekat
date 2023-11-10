using System.Collections.Generic;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Service
{
    public interface IEquipmentService
    {
        IEnumerable<Equipment> GetAll();
        public List<Equipment> SearchByNameOrCompany(string searchQuery);
        
        IEnumerable<Equipment> GetByCompanyId(int id);
        public List<Equipment> SearchByNameInCompany(string searchQuery, int companyId);
        object? GetById(int id);
    }
}