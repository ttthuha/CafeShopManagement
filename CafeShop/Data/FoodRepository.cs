using CafeShop.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace CafeShop.Data
{
    public class FoodRepository
    {
        public IEnumerable<FoodViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection("Server=.\\sqlexpress;Database=CafeShopManagement;Trusted_Connection=True;"))
            {
                return connection.Query<FoodViewModel>("select Id, Name, Price, Type from Food order by Name");
            }
        }
    }
}
