using CafeShop.Data;
using CafeShop.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CafeShop.Controllers
{
    [Route("api/foods")]
    [ApiController]
    public class FoodsController : ControllerBase
    {
        private readonly FoodRepository foodRepository;

        public FoodsController(FoodRepository foodRepository)
        {
            this.foodRepository = foodRepository;
        } 

        [HttpGet]
        public ActionResult<IEnumerable<FoodViewModel>> Get()
        {
            return Ok(foodRepository.Get());
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
