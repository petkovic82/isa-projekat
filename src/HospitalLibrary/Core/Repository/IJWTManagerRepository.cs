using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.Repository
{
    public interface IJwtManagerRepository
    {
        Tokens Authenticate(int userId, string name, Role r);
    }
}