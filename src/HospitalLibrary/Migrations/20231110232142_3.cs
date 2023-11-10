using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HospitalLibrary.Migrations
{
    public partial class _3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rooms");

            migrationBuilder.UpdateData(
                table: "Appointments",
                keyColumn: "Id",
                keyValue: 1,
                column: "Date",
                value: new DateTime(2023, 11, 11, 0, 21, 40, 804, DateTimeKind.Local).AddTicks(6305));

            migrationBuilder.UpdateData(
                table: "Appointments",
                keyColumn: "Id",
                keyValue: 2,
                column: "Date",
                value: new DateTime(2023, 11, 11, 0, 21, 40, 809, DateTimeKind.Local).AddTicks(6663));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Floor = table.Column<int>(type: "integer", nullable: false),
                    Number = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "Appointments",
                keyColumn: "Id",
                keyValue: 1,
                column: "Date",
                value: new DateTime(2023, 11, 7, 23, 51, 4, 713, DateTimeKind.Local).AddTicks(3402));

            migrationBuilder.UpdateData(
                table: "Appointments",
                keyColumn: "Id",
                keyValue: 2,
                column: "Date",
                value: new DateTime(2023, 11, 7, 23, 51, 4, 718, DateTimeKind.Local).AddTicks(210));
        }
    }
}
