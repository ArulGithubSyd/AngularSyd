using Microsoft.EntityFrameworkCore.Migrations;

namespace PremiumCalculator.Migrations
{
    public partial class Delete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Factor",
                table: "Occupations");

            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Occupations");

            migrationBuilder.AddColumn<string>(
                name: "RatingId",
                table: "Occupations",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RatingId",
                table: "Occupations");

            migrationBuilder.AddColumn<decimal>(
                name: "Factor",
                table: "Occupations",
                type: "decimal",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Rating",
                table: "Occupations",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "");
        }
    }
}
