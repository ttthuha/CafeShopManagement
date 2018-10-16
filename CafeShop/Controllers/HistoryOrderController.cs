using CafeShop.Data;
using CafeShop.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CafeShop.Controllers
{
    [Route("api/history-orders")]
    [ApiController]
    public class HistoryOrderController : ControllerBase
    {
        private readonly HistoryOrderRepository historyOrderRepository;

        public HistoryOrderController(HistoryOrderRepository historyOrderRepository)
        {
            this.historyOrderRepository = historyOrderRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<HistoryOrderViewModel>> Get()
        {
            return Ok( historyOrderRepository.Get());
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
