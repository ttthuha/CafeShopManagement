﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CafeShop.Models
{
    public class HistoryOrderViewModel
    {
        public Guid OrderSessionId { get; set; }
        public string Table { get; set; }
        public string Food { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public DateTime Date { get; set; }

    }
}
