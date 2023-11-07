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
                    Date = table.Column<DateTime>(type: "timestamp without time zone", nullable: false)
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
                name: "Rooms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Number = table.Column<string>(type: "text", nullable: false),
                    Floor = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.Id);
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
                table: "Appointments",
                columns: new[] { "Id", "Date", "EmployeeId", "EquipmentId", "Price", "Quantity", "State" },
                values: new object[,]
                {
                    { 1, new DateTime(2023, 11, 7, 23, 42, 9, 49, DateTimeKind.Local).AddTicks(3346), 1, 1, 0.0, 5, 1 },
                    { 2, new DateTime(2023, 11, 7, 23, 42, 9, 52, DateTimeKind.Local).AddTicks(3738), 2, 2, 0.0, 5, 1 }
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
                    { 1, true, 0, "New York", 1, null, "USA", "kpetkovic279@gmail.com", "Kristina", "Software Engineer", "Petkovic", "kpetkovic279", "123-456-7890", 0, "kpetkovic279" },
                    { 5, true, 0, "New York", 2, null, "USA", "kpetkovic7@gmail.com", "Bjanka", "Software Test Engineer", "Tijodorovic", "kpetkovic7", "123-456-7890", 0, "kpetkovic7" },
                    { 2, true, 0, "Los Angeles", 0, null, "USA", "kpetkovic27@gmail.com", "Jelena", "System Admin", "Petkovic", "kpetkovic27", "987-654-3210", 2, "user2" },
                    { 3, true, 0, "Los Angeles", 1, null, "USA", "admin2@gmail.com", "Jelisaveta", "Company admin", "Petrovic", "kpetkovic18", "987-654-3210", 1, "company admin2" },
                    { 4, true, 0, "Los Angeles", 2, null, "USA", "kpetkovic18@gmail.com", "Milica", "Company admin", "Petkovic", "kpetkovic18", "987-654-3210", 1, "kpetkovic18" }
                });

            migrationBuilder.InsertData(
                table: "Equipment",
                columns: new[] { "Id", "CompanyId", "Name", "Price", "Quantity" },
                values: new object[,]
                {
                    { 1, 1, "Shower Chair", 43.0, 150 },
                    { 2, 1, "First Aid Kit", 4.0, 10 },
                    { 3, 1, "Wrist Brace Night Support", 64.0, 143 },
                    { 4, 2, "First Aid Kit", 6.0, 120 },
                    { 6, 2, "Shower Chair", 876.0, 15 },
                    { 8, 2, "Wrist Brace Night Support", 4.0, 17 },
                    { 5, 3, "First Aid Kit", 8.0, 50 },
                    { 7, 3, "Shower Chair", 88.0, 76 }
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
                name: "Rooms");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Company");
        }
    }
}
