using CafeShop.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CafeShop.Data
{
    public class OrderRepository
    {
        public IEnumerable<OrderViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection("Server=.\\sqlexpress;Database=CafeShopManagement;Trusted_Connection=True;"))
            {
                return connection.Query<OrderViewModel>("select Id, TableId, FoodId, Quantity, Date from [Order] order by Date");
            }
        }

        public bool Create(IEnumerable<OrderViewModel> orderViewModels)
        {
            using (SqlConnection connection = new SqlConnection("Server=.\\sqlexpress;Database=CafeShopManagement;Trusted_Connection=True;"))
            {
                foreach (var model in orderViewModels)
                {
                    model.Date = DateTime.Now;
                    connection.Execute("insert into [Orders](Id, TableId, FoodId, Quantity, Date) values(@Id, @TableId, @FoodId, @Quantity, @Date)", model);
                }

                return true;
            }
        }

        public void DeleteOrdersByTable(Guid tableId)
        {
            using (SqlConnection connection = new SqlConnection("Server=.\\sqlexpress;Database=CafeShopManagement;Trusted_Connection=True;"))
            {
                connection.Execute("DELETE FROM [Orders] WHERE TableId = @TableId)", new { @TableId = tableId });
            }
        }
    }

}

