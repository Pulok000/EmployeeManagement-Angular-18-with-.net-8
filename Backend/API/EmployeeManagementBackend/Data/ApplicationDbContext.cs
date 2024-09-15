
using EmployeeManagementBackend.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
