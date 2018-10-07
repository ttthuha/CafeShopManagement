using System;

using CafeShop.Data;
using Microsoft.AspNetCore.Mvc;
using CafeShop.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CafeShop.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrderController: ControllerBase
    {
        private readonly OrderRepository orderRepository;

        public OrderController(OrderRepository orderRepository)
        {
            this.orderRepository = orderRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<OrderViewModel>> Get(string tableId)
        {
            return Ok(orderRepository.Get(tableId));
        }

        [HttpPost]
        public ActionResult Post([FromBody] List<OrderViewModel> orderViewModels)
        {
            if (!orderViewModels.Any())
            {
                return BadRequest();
            }

            orderRepository.DeleteOrdersByTable(orderViewModels.First().TableId);
            orderRepository.Create(orderViewModels);

            return Ok(orderRepository.Get(orderViewModels.First().TableId.ToString()));
        }

        [HttpPut, Route("checkout")]
        public ActionResult CheckOut(Guid tableId)
        {
            orderRepository.Checkout(tableId);
            return Ok();
        }
    }
}
