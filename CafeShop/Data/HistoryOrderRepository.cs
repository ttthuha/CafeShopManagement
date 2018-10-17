using CafeShop.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace CafeShop.Data
{
    public class HistoryOrderRepository
    {
        private readonly string connectionString = null;
        public HistoryOrderRepository(IConfiguration configuration)
        {
            connectionString = configuration["DbConnection"];
        }
        public IEnumerable<HistoryOrderViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                return connection.Query<HistoryOrderViewModel>(@"select [Table].Name AS 'Table', [Food].Name AS 'Food',[OrderHistory].OrderSessionId ,[OrderHistory].Quantity ,[OrderHistory].Price,[OrderHistory].Date 
                                                        from [OrderHistory] 
                                                        inner join [Table] on [Table].Id = [OrderHistory].TableId 
                                                        inner join [Food] on [Food].Id = [OrderHistory].FoodId
                                                        group by [OrderHistory].OrderSessionId, [Table].Name,[Food].Name,[OrderHistory].Quantity ,[OrderHistory].Price,[OrderHistory].Date");
            }
        }
    }
}
