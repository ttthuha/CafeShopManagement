using CafeShop.Data;
using Microsoft.AspNetCore.Mvc;
using CafeShop.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace CafeShop.Controllers
{
    [Route("api/order")]
    [ApiController ]

    public class OrderController: ControllerBase
    {
        private readonly OrderRepository orderRepository;

        public OrderController(OrderRepository orderController )
        {
            this.orderRepository = orderRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<OrderViewModel>> Get()
        {
            return Ok(orderRepository.Get());
        }


        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public ActionResult Post([FromBody] List<OrderViewModel> orderViewModels)
        {
            if (orderViewModels.Count() == 0)
            {
                return BadRequest();
            }

            orderRepository.DeleteOrdersByTable(orderViewModels.First().TableId);
            orderRepository.Create(orderViewModels);

            return Ok();
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
