using CafeShop.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CafeShop.Data
{
    public class EmployeeRepository
    {
        public IEnumerable<EmployeeViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection("Server=.\\sqlexpress;Database=CafeShopManagement;Trusted_Connection=True;"))
            {
                return connection.Query<EmployeeViewModel>("select Name, Phone,Email,Type,BirthDay,Gender from [Employee] order by Name ASC, Type ASC");
            }
        }
    }
}
