using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Service
{
    public interface IUserService
    {
        User GetById(int id);
        bool ExistsByUsername(string username);
        User GetByUsernameAndPassword(string username, string password);
        void Create(User room);
        User GetUserByConfirmationToken(string token);
        public User FindCompanyAdmin(int companyId);
        void Update(User user);
    }
}