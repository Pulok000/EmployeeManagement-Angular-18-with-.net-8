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

    }
}
