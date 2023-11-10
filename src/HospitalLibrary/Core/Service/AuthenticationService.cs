using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Repository;

namespace HospitalLibrary.Core.Service
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IJwtManagerRepository _jWtManager;

        public AuthenticationService(IJwtManagerRepository jWtManager)
        {
            _jWtManager = jWtManager;
        }

        public Tokens Authenticate(int userId, string name, Role r)
        {
            return _jWtManager.Authenticate(userId, name, r);
        }
    }
}