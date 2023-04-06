using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using WAD.API._11456.Context;
using WAD.API._11456.Interfaces;
using WAD.API._11456.Repository;



namespace WAD.API._11456
{
    public class Startup
    {
        private const string DataDirectory = "|DataDirectory|";
        private string _appPath;
        
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<UniContext>(o => o.UseSqlServer(Configuration.GetConnectionString
            ("UniDB").Replace(DataDirectory, _appPath)));
            services.AddControllers();
            services.AddTransient<IBlogRepository, BlogRepository>();
            services.AddTransient<IUniversityRepository, UniversityRepository>();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            _appPath = Path.Combine(env.ContentRootPath, "AppData");
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

