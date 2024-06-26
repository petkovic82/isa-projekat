﻿using System;
using HospitalLibrary.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace HospitalLibrary.Settings
{
    public class HospitalDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<Equipment> Equipment { get; set; }

        public HospitalDbContext(DbContextOptions<HospitalDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Email = "kpetkovic18@gmail.com",
                    Username = "employee1",
                    UserRole = Role.Employee,
                    Password =  BCrypt.Net.BCrypt.HashPassword("1"),
                    FirstName = "Kristina",
                    LastName = "Petkovic",
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
                    Id = 5,
                    Email = "kpetkovic18@gmail.com",
                    Username = "employee2",
                    UserRole = Role.Employee,
                    Password =  BCrypt.Net.BCrypt.HashPassword("1"),
                    FirstName = "Bjanka",
                    LastName = "Tijodorovic",
                    City = "New York",
                    Country = "USA",
                    PhoneNumber = "123-456-7890",
                    Job = "Software Test Engineer",
                    CompanyId = 2,
                    Activated = true,
                    CancelCount = 0
                },
                new User
                {
                    Id = 2,
                    Email = "kpetkovic18@gmail.com",
                    Username = "systemAdmin",
                    UserRole = Role.SystemAdmin,
                    Password =  BCrypt.Net.BCrypt.HashPassword("1"),
                    FirstName = "Jelena",
                    LastName = "Petkovic",
                    City = "Los Angeles",
                    Country = "USA",
                    PhoneNumber = "987-654-3210",
                    Job = "System Admin",
                    CompanyId = 0, //sistem admin nema kompaniju
                    Activated = true,
                    CancelCount = 0
                },
                new User
                {
                    Id = 3,
                    Email = "admin2@gmail.com",
                    Username = "companyAdmin1",
                    UserRole = Role.CompanyAdmin,
                    Password = BCrypt.Net.BCrypt.HashPassword("1"),
                    FirstName = "Jelisaveta",
                    LastName = "Petrovic",
                    City = "Los Angeles",
                    Country = "USA",
                    PhoneNumber = "987-654-3210",
                    Job = "Company admin",
                    CompanyId = 1,
                    Activated = true,
                    CancelCount = 0
                },
                new User
                {
                    Id = 4,
                    Email = "kpetkovic18@gmail.com",
                    Username = "companyAdmin2",
                    UserRole = Role.CompanyAdmin,
                    Password =  BCrypt.Net.BCrypt.HashPassword("1"),
                    FirstName = "Milica",
                    LastName = "Petkovic",
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
                    Name = "Abbott Laboratories"
                },
                new Company
                {
                    Id = 2,
                    Name = "Medical Technology Expo - BIOMED Silicon Valley"
                },
                new Company
                {
                    Id = 3,
                    Name = "Johnson & Johnson"
                }
            );

            modelBuilder.Entity<Equipment>().HasData(
                new Equipment
                {
                    Id = 1,
                    Name = "Shower Chair",
                    CompanyId = 1,
                    Quantity = 150,
                    Price = 43
                },
                new Equipment
                {
                    Id = 2,
                    Name = "First Aid Kit",
                    CompanyId = 1,
                    Quantity = 10,
                    Price = 4
                },
                new Equipment
                {
                    Id = 3,
                    Name = "Wrist Brace Night Support",
                    CompanyId = 1,
                    Quantity = 143,
                    Price = 64
                },
                new Equipment
                {
                    Id = 4,
                    Name = "First Aid Kit",
                    CompanyId = 2,
                    Quantity = 120,
                    Price = 6
                },
                new Equipment
                {
                    Id = 5,
                    Name = "First Aid Kit",
                    CompanyId = 3,
                    Quantity = 50,
                    Price = 8
                },
                new Equipment
                {
                    Id = 6,
                    Name = "Shower Chair",
                    CompanyId = 2,
                    Quantity = 15,
                    Price = 876
                },
                new Equipment
                {
                    Id = 7,
                    Name = "Shower Chair",
                    CompanyId = 3,
                    Quantity = 76,
                    Price = 88
                },
                new Equipment
                {
                    Id = 8,
                    Name = "Wrist Brace Night Support",
                    CompanyId = 2,
                    Quantity = 17,
                    Price = 4
                }
            );
            

            base.OnModelCreating(modelBuilder);
        }
    }
}