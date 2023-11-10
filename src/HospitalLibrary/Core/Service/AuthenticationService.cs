using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Repository;

namespace HospitalLibrary.Core.Service
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IJwtManagerRepository _jWTManager;

        public AuthenticationService(IJwtManagerRepository jWTManager)
        {
            _jWTManager = jWTManager;
        }

        public Tokens Authenticate(int userId, string name, Role r)
        {
            return _jWTManager.Authenticate(userId, name, r);
        }
    }
}