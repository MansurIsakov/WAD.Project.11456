using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Transactions;
using WAD.API._11456.Interfaces;
using WAD.API._11456.Models;

namespace WAD.API._11456.Controllers
{
    [Route("api/universities")]
    [ApiController]
    public class UniversityController: ControllerBase
    {
        private readonly IUniversityRepository _uniRepository;
        public UniversityController(IUniversityRepository uniRepository)
        {
            _uniRepository = uniRepository;
        }

        // GET: api/universities
        [HttpGet]
        public IActionResult Get()
        {
            var unis = _uniRepository.GetAllUniversities();
            return new OkObjectResult(unis);
        }

        // GET: api/universities/:id
        [HttpGet("{id}", Name = "GetUniById")]
        public IActionResult Get(int id)
        {
            var uni = _uniRepository.GetUniversityById(id);
            if (uni == null)
            {
                return new NotFoundObjectResult(new { message = "No university with such ID", status = 404 });
            }
            return new OkObjectResult(uni);
        }

        // GET: api/uni/shortnames
        [HttpGet("shortnames", Name= "Get Short Names")]
        public IActionResult GetShortNames()
        {
            var unisShortNames = _uniRepository.GetUniversitiesShortNames();
            if (unisShortNames.Count() == 0)
            {
                return new NotFoundObjectResult(new { message = "No universities created yet", StatusCode = 404 });
            }
            return new OkObjectResult(unisShortNames);
        }

        // POST: api/universities
        [HttpPost]
        public IActionResult Post([FromBody] University uni)
        {
            using (var scope = new TransactionScope())
            {
                _uniRepository.InsertUniversity(uni);
                scope.Complete();
                return CreatedAtAction(nameof(Get), new { id = uni.Id }, uni);
            }
        }

        // PUT: api/universities/:id
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] University uni)
        {
            if (uni != null)
            {
                using (var scope = new TransactionScope())
                {
                    _uniRepository.UpdateUniversity(uni);
                    scope.Complete();
                    return new OkObjectResult(new { message = "Successfuly Updated", status = 202 });
                }
            }
            return new NoContentResult();
        }

        // DELETE: api/universities/:id
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _uniRepository.DeleteUniversity(id);
            return new OkObjectResult(new { message = "Successfuly Deteled", status = 204 });
        }
    }
}
