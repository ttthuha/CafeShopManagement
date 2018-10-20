using CafeShop.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CafeShop.Data
{
    public class EmployeeRepository
    {
        private readonly string connectionString = null;
        public EmployeeRepository(IConfiguration configuration)
        {
            connectionString = configuration["DbConnection"];
        }
        public IEnumerable<EmployeeViewModel> Get()
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                return connection.Query<EmployeeViewModel>(@"select Id, Name, Phone,Email,Type,BirthDay,Gender from [Employee] order by Name ASC");
            }
        }
        public IEnumerable<EmployeeViewModel> Search(string employeeName)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                return connection.Query<EmployeeViewModel>(@"select Id, Name, Phone,Email,Type,BirthDay,Gender from [Employee] where Name like '%" + employeeName + "%' order by Name ASC");
            }
        }
    }
}
