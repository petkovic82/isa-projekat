using System.Linq;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Repository;

namespace HospitalLibrary.Core.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public bool ExistsByUsername(string username)
        {
            var users = _userRepository.GetAll().ToList();
            return users.Any(user => user.Username != null && user.Username == username);
        }

        public User GetByUsernameAndPassword(string username, string password)
        {
            return _userRepository.GetByUsernameAndPassword(username, password);
        }

        public User GetById(int id)
        {
            return _userRepository.GetById(id);
        }

        public void Create(User room)
        {
            _userRepository.Create(room);
        }

        public User GetUserByConfirmationToken(string token)
        {
            return _userRepository.GetUserByConfirmationToken(token);
        }

        public User FindCompanyAdmin(int companyId)
        {
            return _userRepository.FindCompanyAdmin(companyId);
        }

        public void Update(User user)
        {
            _userRepository.Update(user);
        }
    }
}