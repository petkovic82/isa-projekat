using System.Collections.Generic;
using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Repository
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
        User GetByUsernameAndPassword(string username, string password);
        void Create(User user);
        void Update(User user);
        public User FindCompanyAdmin(int companyId);
        User GetUserByConfirmationToken(string token);
        User GetByUsername(object username);
    }
}