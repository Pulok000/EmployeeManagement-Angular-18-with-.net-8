using EmployeeManagementBackend.Data;
using EmployeeManagementBackend.Models.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementBackend.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly ApplicationDbContext _db;
        public EmployeeController(ApplicationDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        [Route("api/employee/getallemployee")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetAllEmployee()
        {
            return await _db.Employees.ToListAsync();
        }

        [HttpPost]
        [Route("api/employee/addnewemployee")]
        public async Task<ActionResult<Employee>> AddNewEmployee([FromBody] Employee employee)
        {

            if (employee == null || string.IsNullOrEmpty(employee.Name) || string.IsNullOrEmpty(employee.Email) || string.IsNullOrEmpty(employee.Phone))
            {
                return BadRequest("Invalid employee data.");
            }
            _db.Employees.Add(employee);
            await _db.SaveChangesAsync();
            return CreatedAtAction("GetAllEmployee", new { id = employee.Id }, employee);
        }

    }
}
