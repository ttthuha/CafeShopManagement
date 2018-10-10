using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CafeShop.Models
{
    public class HistoryOrderViewModel
    {
        public Guid Id { get; set; }
        public Guid OrderSessionId { get; set; }
        public Guid TableId { get; set; }
        public Guid FoodId { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public DateTime Date { get; set; }

    }
}
