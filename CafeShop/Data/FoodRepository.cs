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
    public class FoodRepository
    {
        private readonly string connectionString = null;
        public FoodRepository(IConfiguration configuration)
        {
            connectionString = configuration["DbConnection"];
        }
        public IEnumerable<FoodViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                return connection.Query<FoodViewModel>("select Id, Name, Price, Type from Food order by Name");
            }
        }
    }
}
