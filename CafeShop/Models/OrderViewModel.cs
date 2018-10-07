using System;


namespace CafeShop.Models
{
    public class OrderViewModel
    {
        public Guid Id { get; set; }
        public Guid TableId { get; set; }
        public Guid FoodId { get; set; }
        public int Quantity { get; set; }
        public DateTime Date { get; set; }
    }
}
