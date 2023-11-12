using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HospitalLibrary.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Appointments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    EmployeeId = table.Column<int>(type: "integer", nullable: false),
                    EquipmentId = table.Column<int>(type: "integer", nullable: false),
                    Quantity = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false),
                    State = table.Column<int>(type: "integer", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    RowVersion = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Company",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Company", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Username = table.Column<string>(type: "text", nullable: true),
                    UserRole = table.Column<int>(type: "integer", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: true),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    City = table.Column<string>(type: "text", nullable: true),
                    Country = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    Job = table.Column<string>(type: "text", nullable: true),
                    CompanyId = table.Column<int>(type: "integer", nullable: false),
                    Activated = table.Column<bool>(type: "boolean", nullable: false),
                    CancelCount = table.Column<int>(type: "integer", nullable: false),
                    ConfirmationToken = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Equipment",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CompanyId = table.Column<int>(type: "integer", nullable: false),
                    CompanyName = table.Column<string>(type: "text", nullable: true),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Quantity = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Equipment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Equipment_Company_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Company",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Company",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Abbott Laboratories" },
                    { 2, "Medical Technology Expo - BIOMED Silicon Valley" },
                    { 3, "Johnson & Johnson" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Activated", "CancelCount", "City", "CompanyId", "ConfirmationToken", "Country", "Email", "FirstName", "Job", "LastName", "Password", "PhoneNumber", "UserRole", "Username" },
                values: new object[,]
                {
                    { 1, true, 0, "New York", 1, null, "USA", "kpetkovic18@gmail.com", "Kristina", "Software Engineer", "Petkovic", "$2b$10$O1TJyw4yucpzbIIy7zPQH.BFM7irpAOpAK1flvUP8jTaZA15j4QRS", "123-456-7890", 0, "employee1" },
                    { 5, true, 0, "New York", 2, null, "USA", "kpetkovic18@gmail.com", "Bjanka", "Software Test Engineer", "Tijodorovic", "$2b$10$rrIm9QmwXFNy8WCqyZ3r8OdFPQfMYFqtKwaj8KJ88f0BTF8D9h/0e", "123-456-7890", 0, "employee2" },
                    { 2, true, 0, "Los Angeles", 0, null, "USA", "kpetkovic18@gmail.com", "Jelena", "System Admin", "Petkovic", "$2b$10$OaXgI5rRAbmqhO6/adQ7YO4RCWPG8GGHW5bTBXUL5g7kgeE/XRb42", "987-654-3210", 2, "systemAdmin" },
                    { 3, true, 0, "Los Angeles", 1, null, "USA", "admin2@gmail.com", "Jelisaveta", "Company admin", "Petrovic", "$2b$10$cjKSp9bN2DnFd44L.bx1HeQZaoeeKSzZLKufdt6OxjkKmD4kExXE6", "987-654-3210", 1, "companyAdmin1" },
                    { 4, true, 0, "Los Angeles", 2, null, "USA", "kpetkovic18@gmail.com", "Milica", "Company admin", "Petkovic", "$2b$10$YrWRMeuG1DQi7AFqW55AIOY5sC7gr9t8zMaJzDlCS9z5cme5DorlW", "987-654-3210", 1, "companyAdmin2" }
                });

            migrationBuilder.InsertData(
                table: "Equipment",
                columns: new[] { "Id", "CompanyId", "CompanyName", "Name", "Price", "Quantity" },
                values: new object[,]
                {
                    { 1, 1, null, "Shower Chair", 43.0, 150 },
                    { 2, 1, null, "First Aid Kit", 4.0, 10 },
                    { 3, 1, null, "Wrist Brace Night Support", 64.0, 143 },
                    { 4, 2, null, "First Aid Kit", 6.0, 120 },
                    { 6, 2, null, "Shower Chair", 876.0, 15 },
                    { 8, 2, null, "Wrist Brace Night Support", 4.0, 17 },
                    { 5, 3, null, "First Aid Kit", 8.0, 50 },
                    { 7, 3, null, "Shower Chair", 88.0, 76 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Equipment_CompanyId",
                table: "Equipment",
                column: "CompanyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Appointments");

            migrationBuilder.DropTable(
                name: "Equipment");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Company");
        }
    }
}
