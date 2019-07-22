using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalculator.Models
{
    public class Occupation
    {
        [Key]
        public int OccupationId { get; set; }        
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string OccupationDesc { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int RatingId { get; set; }

    }
}
