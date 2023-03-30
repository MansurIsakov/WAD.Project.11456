using Microsoft.EntityFrameworkCore;
using WAD.API._11456.Models;

namespace WAD.API._11456.Context
{
    public class UniContext: DbContext
    {
        public UniContext(DbContextOptions<UniContext> o) : base(o)
        {
            Database.EnsureCreated();
        }

        // Database Tables
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<University> Universities { get; set; }
    }
}
