using System.Collections.Generic;
using System.Linq;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Settings;
using Microsoft.EntityFrameworkCore;

namespace HospitalLibrary.Core.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly HospitalDbContext _context;

        public UserRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public User GetByUsernameAndPassword(string username, string password)
        {
            return GetAll().FirstOrDefault(u => u.Password.Equals(password) && u.Username.Equals(username));
        }

        public void Create(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void Update(User user)
        {
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
        }


        public User GetUserByConfirmationToken(string token)
        {
            return _context.Users.FirstOrDefault(u => u.ConfirmationToken == token);
        }

        public User GetByUsername(object username)
        {
            return GetAll().FirstOrDefault(u =>  u.Username.Equals(username));

        }

        public User FindCompanyAdmin(int companyId)
        {
            return _context.Users.FirstOrDefault(u => u.CompanyId == companyId && u.UserRole == Role.CompanyAdmin);
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.ToList();
        }
    }
}