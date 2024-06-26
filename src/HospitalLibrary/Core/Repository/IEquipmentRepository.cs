﻿using System.Collections.Generic;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Repository
{
    public interface IEquipmentRepository
    {
        IEnumerable<Equipment> GetAll();
        Equipment GetById(int id);
        void Update(Equipment room);
        List<Equipment> SearchByNameOrCompany(string searchQuery);
        IEnumerable<Equipment> GetByCompanyId(int id);
        List<Equipment> SearchByNameInCompany(string searchQuery, int companyId);
    }
}