using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Service
{
    public interface IAuthenticationService
    {
        Tokens Authenticate(int userId, string name, Role r);
    }
}