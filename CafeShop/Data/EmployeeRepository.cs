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
        public void Add(EmployeeViewModel employeeViewModel)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
               connection.Execute(@"Insert into [Employee] (Id, Name, Phone,Email,Type,BirthDay,Gender) values (@Id, @Name, @Phone, @Email, @Type, @BirthDay, @Gender)",employeeViewModel);
            }
        }
        public void Delete(Guid employeeID)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Execute(@"DELETE FROM [Employee] WHERE Id = @Id", new { Id = employeeID });
            }
        }

        public void Edit(Guid employeeID,string employeeName, string employeePhone, string employeeEmail, string employeeType, string employeeBirthday, string employeeGender)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Execute(@"UPDATE [Employee] SET Name = "+ employeeName + "Phone = " + employeePhone + "Email = " + employeeEmail + "Type = "+ employeeType + "BirthDay = "+ employeeBirthday + "Gender = " + employeeGender + " WHERE Id = @Id " ,new { Id = employeeID });
            }
        }
    }
}
