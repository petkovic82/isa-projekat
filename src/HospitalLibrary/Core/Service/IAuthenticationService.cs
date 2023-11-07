using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Service
{
    public interface IAuthenticationService
    {
        Tokens Authenticate(string name, Role r);
    }
}