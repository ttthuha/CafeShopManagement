using CafeShop.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.Extensions.Configuration;

using Remotion.Linq.Clauses;

namespace CafeShop.Data
{
    public class OrderRepository
    {
        private readonly string connectionString = null;
        public OrderRepository(IConfiguration configuration)
        {
            connectionString = configuration["DbConnection"];
        }
        public IEnumerable<OrderViewModel> Get(string tableId = null)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                var whereClause = "WHERE 1 = 1";
                if (tableId != null)
                {
                    whereClause += $"AND TableId=\'{tableId}\'";
                }
                return connection.Query<OrderViewModel>("Select Id, TableId, FoodId, Quantity, Date from [Order] " + whereClause + " Order By Date");
            }
        }

        public bool Create(IEnumerable<OrderViewModel> orderViewModels)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                foreach (var model in orderViewModels)
                {
                    model.Id = Guid.NewGuid();
                    model.Date = DateTime.Now;
                    connection.Execute("insert into [Order](Id, TableId, FoodId, Quantity, Date) values(@Id, @TableId, @FoodId, @Quantity, @Date)", model);
                }

                return true;
            }
        }

        public void DeleteOrdersByTable(Guid tableId)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Execute("DELETE FROM [Order] WHERE TableId = @TableId", new { @TableId = tableId });
            }
        }

        public void Checkout(Guid tableId)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Execute(@"
                    declare @sessionId as uniqueidentifier  = newid();

                    insert into OrderHistory(Id, OrderSessionId, TableId, FoodId, Quantity, Price, [Date])
                    SELECT newid(), @sessionId
                        ,[TableId]
                        ,[FoodId]
                        ,[Quantity]
                        , Price
                        ,[Date]
                    FROM[dbo].[Order] as o
                    inner join[dbo].Food as f on(f.Id = o.FoodId)
                    where TableId = @TableId", new { @TableId = tableId });
            }

            DeleteOrdersByTable(tableId);
        }
    }

}

