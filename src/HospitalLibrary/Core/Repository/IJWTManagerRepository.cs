using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Repository
{
    public interface IJwtManagerRepository
    {
        Tokens Authenticate(string name, Role r);
    }
}