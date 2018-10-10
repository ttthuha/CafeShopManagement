using CafeShop.Models;
using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;

using Microsoft.Extensions.Configuration;

namespace CafeShop.Data
{
    public class TableRepository
    {
        private readonly string connectionString = null;
        public TableRepository(IConfiguration configuration)
        {
            connectionString = configuration["DbConnection"];
        }

        public IEnumerable<TableViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                return connection.Query<TableViewModel>("SELECT Id, Name, Type from [Table] order by Type ASC, Name ASC");
            }
        }
    }
}
 