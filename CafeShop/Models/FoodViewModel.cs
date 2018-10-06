using System;

namespace CafeShop.Models
{
    public class FoodViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Type { get; set; }
    }
}
