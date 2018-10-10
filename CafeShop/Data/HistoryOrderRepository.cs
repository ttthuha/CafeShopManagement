using CafeShop.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace CafeShop.Data
{
    public class HistoryOrderRepository
    {
        public IEnumerable<FoodViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection("Server=.\\sqlexpress;Database=CafeShopManagement;Trusted_Connection=True;"))
            {
                return connection.Query<FoodViewModel>("select [Table].Name, [Food].Name,[OrderHistory].Quantity,[OrderHistory].Price,[OrderHistory].Date" +
                    "from [OrderHistory] join [Table] on [Table].Id = [OrderHistory].Id join [Food] on [Food].Id=[OrderHistory].FoodId");
            }
        }
    }
}
