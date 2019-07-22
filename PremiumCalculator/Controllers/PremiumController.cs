using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PremiumCalculator.Models;

namespace PremiumCalculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PremiumController : ControllerBase
    {
        private readonly PremiumDetailsContext _context;

        public PremiumController(PremiumDetailsContext context)
        {
            _context = context;
        }

        // GET: api/Occupation
        [HttpGet]
        public IEnumerable<Occupation> GetOccupations()
        {
            return _context.Occupations;
        }

        // GET: api/GetFactor/5
        [HttpGet("{Occid}")]
        public async Task<IActionResult> GetFactor([FromRoute] int OccId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var occupation = await _context.Occupations.FindAsync(OccId);
            var factorForRating = await _context.RatingFactors.FindAsync(occupation.RatingId);
            if (factorForRating == null)
            {
                return NotFound();
            }

            return Ok(factorForRating.Factor);
        }


    }
}