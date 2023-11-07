using System;
using HospitalLibrary.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace HospitalLibrary.Settings
{
    public class HospitalDbContext : DbContext
    {
        public DbSet<Room> Rooms { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<Equipment> Equipment { get; set; }

        public HospitalDbContext(DbContextOptions<HospitalDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User()
                {
                    Id = 1,
                    Email = "kpetkovic279@gmail.com",
                    Username = "user1",
                    UserRole = Role.Employee, // Assuming Role is an enum or a related entity
                    Password = "kpetkovic279",
                    FirstName = "John",
                    LastName = "Doe",
                    City = "New York",
                    Country = "USA",
                    PhoneNumber = "123-456-7890",
                    Job = "Software Engineer",
                    CompanyId = 1,
                    Activated = true,
                    CancelCount = 0
                },
                new User
                {
                    Id = 2,
                    Email = "kpetkovic27@gmail.com",
                    Username = "user2",
                    UserRole = Role.SystemAdmin, // Assuming Role is an enum or a related entity
                    Password = "kpetkovic27",
                    FirstName = "Jane",
                    LastName = "Smith",
                    City = "Los Angeles",
                    Country = "USA",
                    PhoneNumber = "987-654-3210",
                    Job = "System Admin",
                    CompanyId= 0,
                    Activated = true,
                    CancelCount = 0
                },
                new User
                {
                    Id = 3,
                    Email = "kpetkovic18@gmail.com",
                    Username = "user2",
                    UserRole = Role.CompanyAdmin, // Assuming Role is an enum or a related entity
                    Password = "kpetkovic18",
                    FirstName = "Jane",
                    LastName = "Smith",
                    City = "Los Angeles",
                    Country = "USA",
                    PhoneNumber = "987-654-3210",
                    Job = "Company admin",
                    CompanyId = 2,
                    Activated = true,
                    CancelCount = 0
                }
            );
            modelBuilder.Entity<Company>().HasData(
                new Company
                {
                    Id = 1,
                    Name = "Company ABC"
                },
                new Company
                {
                    Id = 2,
                    Name = "Company XYZ"
                }
                
            );
            
            modelBuilder.Entity<Equipment>().HasData(
                new Equipment
                {
                    Id = 1, 
                    Name = "Equipment 1"
                },
                new Equipment()
                {
                    Id = 2,
                    Name = "Equipment 2"
                }
            );
            
            modelBuilder.Entity<Appointment>().HasData(
                new Appointment
                {
                    Id = 1,
                    EmployeeId = 1, 
                    EquipmentId = 1,
                    State = State.InProgress, 
                    Date = DateTime.Now
                },
                new Appointment
                {
                    Id = 2,
                    EmployeeId = 2,
                    EquipmentId = 2, 
                    State = State.InProgress, 
                    Date = DateTime.Now 
                }
            );
            
            base.OnModelCreating(modelBuilder);
        }
    }
}
