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
    public class OccupationController : ControllerBase
    {
        private readonly PremiumDetailsContext _context;

        public OccupationController(PremiumDetailsContext context)
        {
            _context = context;
        }

        // GET: api/Occupation
        [HttpGet]
        public IEnumerable<Occupation> GetOccupations()
        {
            return _context.Occupations;
        }

        // GET: api/Occupation/5
        [HttpGet("{Occid}")]
        public async Task<IActionResult> CalcPremium([FromRoute] int OccId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var occupation = await _context.Occupations.FindAsync(OccId);
            

            if (occupation == null)
            {
                return NotFound();
            }

            return Ok(occupation);
        }

        // GET: api/Occupation/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOccupation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var occupation = await _context.Occupations.FindAsync(id);

            if (occupation == null)
            {
                return NotFound();
            }

            return Ok(occupation);
        }

        // PUT: api/Occupation/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOccupation([FromRoute] int id, [FromBody] Occupation occupation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != occupation.OccupationId)
            {
                return BadRequest();
            }

            _context.Entry(occupation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OccupationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Occupation
        [HttpPost]
        public async Task<IActionResult> PostOccupation([FromBody] Occupation occupation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Occupations.Add(occupation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOccupation", new { id = occupation.OccupationId }, occupation);
        }

        // DELETE: api/Occupation/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOccupation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var occupation = await _context.Occupations.FindAsync(id);
            if (occupation == null)
            {
                return NotFound();
            }

            _context.Occupations.Remove(occupation);
            await _context.SaveChangesAsync();

            return Ok(occupation);
        }

        private bool OccupationExists(int id)
        {
            return _context.Occupations.Any(e => e.OccupationId == id);
        }
    }
}