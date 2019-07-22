using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalculator.Models
{
    public class PremiumDetailsContext: DbContext 
    {
        public PremiumDetailsContext(DbContextOptions<PremiumDetailsContext> options): base(options)
        {

        }

        public DbSet<Occupation> Occupations { get; set; }
        public DbSet<RatingFactor> RatingFactors { get; set; }
    }
}
   