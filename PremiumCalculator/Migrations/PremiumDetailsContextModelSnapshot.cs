﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PremiumCalculator.Models;

namespace PremiumCalculator.Migrations
{
    [DbContext(typeof(PremiumDetailsContext))]
    partial class PremiumDetailsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PremiumCalculator.Models.Occupation", b =>
                {
                    b.Property<int>("OccupationId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("OccupationDesc")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<int>("RatingId")
                        .HasColumnType("int");

                    b.HasKey("OccupationId");

                    b.ToTable("Occupations");
                });

            modelBuilder.Entity("PremiumCalculator.Models.RatingFactor", b =>
                {
                    b.Property<int>("RatingId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Factor")
                        .HasColumnType("decimal");

                    b.Property<string>("RatingDesc")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.HasKey("RatingId");

                    b.ToTable("RatingFactors");
                });
#pragma warning restore 612, 618
        }
    }
}
