using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalculator.Models
{
    public class RatingFactor
    {
        [Key]
        public int RatingId { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string RatingDesc { get; set; }
        [Required]
        [Column(TypeName = "decimal")]
        public decimal Factor { get; set; }


    }
}

