using System.Collections.Generic;
using CafeShop.Data;
using CafeShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace CafeShop.Controllers
{
    [Route("api/tables")]
    [ApiController]
    public class TableController : ControllerBase
    {
        private readonly TableRepository tableRepository;

        public TableController(TableRepository tableRepository)
        {
            this.tableRepository = tableRepository;
        } 

        [HttpGet]
        public ActionResult<IEnumerable<TableViewModel>> Get()
        {
            return Ok(tableRepository.Get());
        }
        
        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
