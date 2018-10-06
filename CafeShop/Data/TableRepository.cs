using CafeShop.Models;
using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;

namespace CafeShop.Data
{
    public class TableRepository
    {
        public IEnumerable<TableViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection("Server=.\\sqlexpress;Database=CafeShopManagement;Trusted_Connection=True;"))
            {
                return connection.Query<TableViewModel>("SELECT Id, Name, Type from [Table] order by Type ASC, Name ASC");
            }
        }
    }
}
