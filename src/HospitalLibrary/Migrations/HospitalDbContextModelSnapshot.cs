﻿// <auto-generated />
using System;
using HospitalLibrary.Settings;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HospitalLibrary.Migrations
{
    [DbContext(typeof(HospitalDbContext))]
    partial class HospitalDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("HospitalLibrary.Core.Model.Appointment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("EmployeeId")
                        .HasColumnType("integer");

                    b.Property<int>("EquipmentId")
                        .HasColumnType("integer");

                    b.Property<double>("Price")
                        .HasColumnType("double precision");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<Guid>("RowVersion")
                        .HasColumnType("uuid");

                    b.Property<int>("State")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Appointments");
                });

            modelBuilder.Entity("HospitalLibrary.Core.Model.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Company");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Abbott Laboratories"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Medical Technology Expo - BIOMED Silicon Valley"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Johnson & Johnson"
                        });
                });

            modelBuilder.Entity("HospitalLibrary.Core.Model.Equipment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("CompanyId")
                        .HasColumnType("integer");

                    b.Property<string>("CompanyName")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<double>("Price")
                        .HasColumnType("double precision");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.ToTable("Equipment");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CompanyId = 1,
                            Name = "Shower Chair",
                            Price = 43.0,
                            Quantity = 150
                        },
                        new
                        {
                            Id = 2,
                            CompanyId = 1,
                            Name = "First Aid Kit",
                            Price = 4.0,
                            Quantity = 10
                        },
                        new
                        {
                            Id = 3,
                            CompanyId = 1,
                            Name = "Wrist Brace Night Support",
                            Price = 64.0,
                            Quantity = 143
                        },
                        new
                        {
                            Id = 4,
                            CompanyId = 2,
                            Name = "First Aid Kit",
                            Price = 6.0,
                            Quantity = 120
                        },
                        new
                        {
                            Id = 5,
                            CompanyId = 3,
                            Name = "First Aid Kit",
                            Price = 8.0,
                            Quantity = 50
                        },
                        new
                        {
                            Id = 6,
                            CompanyId = 2,
                            Name = "Shower Chair",
                            Price = 876.0,
                            Quantity = 15
                        },
                        new
                        {
                            Id = 7,
                            CompanyId = 3,
                            Name = "Shower Chair",
                            Price = 88.0,
                            Quantity = 76
                        },
                        new
                        {
                            Id = 8,
                            CompanyId = 2,
                            Name = "Wrist Brace Night Support",
                            Price = 4.0,
                            Quantity = 17
                        });
                });

            modelBuilder.Entity("HospitalLibrary.Core.Model.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<bool>("Activated")
                        .HasColumnType("boolean");

                    b.Property<int>("CancelCount")
                        .HasColumnType("integer");

                    b.Property<string>("City")
                        .HasColumnType("text");

                    b.Property<int>("CompanyId")
                        .HasColumnType("integer");

                    b.Property<string>("ConfirmationToken")
                        .HasColumnType("text");

                    b.Property<string>("Country")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("Job")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<int>("UserRole")
                        .HasColumnType("integer");

                    b.Property<string>("Username")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Activated = true,
                            CancelCount = 0,
                            City = "New York",
                            CompanyId = 1,
                            Country = "USA",
                            Email = "kpetkovic18@gmail.com",
                            FirstName = "Kristina",
                            Job = "Software Engineer",
                            LastName = "Petkovic",
                            Password = "$2b$10$O1TJyw4yucpzbIIy7zPQH.BFM7irpAOpAK1flvUP8jTaZA15j4QRS",
                            PhoneNumber = "123-456-7890",
                            UserRole = 0,
                            Username = "employee1"
                        },
                        new
                        {
                            Id = 5,
                            Activated = true,
                            CancelCount = 0,
                            City = "New York",
                            CompanyId = 2,
                            Country = "USA",
                            Email = "kpetkovic18@gmail.com",
                            FirstName = "Bjanka",
                            Job = "Software Test Engineer",
                            LastName = "Tijodorovic",
                            Password = "$2b$10$rrIm9QmwXFNy8WCqyZ3r8OdFPQfMYFqtKwaj8KJ88f0BTF8D9h/0e",
                            PhoneNumber = "123-456-7890",
                            UserRole = 0,
                            Username = "employee2"
                        },
                        new
                        {
                            Id = 2,
                            Activated = true,
                            CancelCount = 0,
                            City = "Los Angeles",
                            CompanyId = 0,
                            Country = "USA",
                            Email = "kpetkovic18@gmail.com",
                            FirstName = "Jelena",
                            Job = "System Admin",
                            LastName = "Petkovic",
                            Password = "$2b$10$OaXgI5rRAbmqhO6/adQ7YO4RCWPG8GGHW5bTBXUL5g7kgeE/XRb42",
                            PhoneNumber = "987-654-3210",
                            UserRole = 2,
                            Username = "systemAdmin"
                        },
                        new
                        {
                            Id = 3,
                            Activated = true,
                            CancelCount = 0,
                            City = "Los Angeles",
                            CompanyId = 1,
                            Country = "USA",
                            Email = "admin2@gmail.com",
                            FirstName = "Jelisaveta",
                            Job = "Company admin",
                            LastName = "Petrovic",
                            Password = "$2b$10$cjKSp9bN2DnFd44L.bx1HeQZaoeeKSzZLKufdt6OxjkKmD4kExXE6",
                            PhoneNumber = "987-654-3210",
                            UserRole = 1,
                            Username = "companyAdmin1"
                        },
                        new
                        {
                            Id = 4,
                            Activated = true,
                            CancelCount = 0,
                            City = "Los Angeles",
                            CompanyId = 2,
                            Country = "USA",
                            Email = "kpetkovic18@gmail.com",
                            FirstName = "Milica",
                            Job = "Company admin",
                            LastName = "Petkovic",
                            Password = "$2b$10$YrWRMeuG1DQi7AFqW55AIOY5sC7gr9t8zMaJzDlCS9z5cme5DorlW",
                            PhoneNumber = "987-654-3210",
                            UserRole = 1,
                            Username = "companyAdmin2"
                        });
                });

            modelBuilder.Entity("HospitalLibrary.Core.Model.Equipment", b =>
                {
                    b.HasOne("HospitalLibrary.Core.Model.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Company");
                });
#pragma warning restore 612, 618
        }
    }
}
