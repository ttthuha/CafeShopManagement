using CafeShop.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using CafeShop.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CafeShop.Controllers
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeRepository employeeRepository;

        public EmployeesController (EmployeeRepository employeeRepository)
        {
            this.employeeRepository = employeeRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<EmployeeViewModel>> Get()
        {
            return Ok(employeeRepository.Get());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody] EmployeeViewModel employeeViewModel )
        {
            employeeViewModel.Id = Guid.NewGuid();
            employeeRepository.Add(employeeViewModel);
            return Ok();
        }

        // POST api/values
        [HttpPost]
        public ActionResult Edit(Guid employeeID, string employeeName, string employeePhone, string employeeEmail, string employeeType, string employeeBirthday, string employeeGender)
        {
            employeeRepository.Edit(employeeID, employeeName, employeePhone, employeeEmail, employeeType, employeeBirthday, employeeGender);
            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
           // return Ok(employeeRepository.Delete(id));
        }
        //Search api/value/s
        [HttpGet, Route("search")]
        public ActionResult<string> SearchEmpoyee(string employeeName)
        {
            return Ok(employeeRepository.Search(employeeName));
        }
    }
}
