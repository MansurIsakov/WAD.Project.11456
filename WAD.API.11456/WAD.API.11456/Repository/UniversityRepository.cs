using System.Collections.Generic;
using System.Linq;
using WAD.API._11456.Context;
using WAD.API._11456.Interfaces;
using WAD.API._11456.Models;

namespace WAD.API._11456.Repository
{
    public class UniversityRepository: IUniversityRepository
    {
        private readonly UniContext _dbContext;
        public UniversityRepository(UniContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void DeleteUniversity(int universityId)
        {
            var uni = _dbContext.Universities.Find(universityId);
            if (uni == null)
            {
                return ;
            }
            var blogPosts = _dbContext.Blogs.Where(b => b.University.Id == uni.Id);

            if (blogPosts.Any())
            {
                _dbContext.Blogs.RemoveRange(blogPosts);
            }
            _dbContext.Universities.Remove(uni);
            Save();
        }

        public University GetUniversityById(int universityId)
        {
            var university = _dbContext.Universities.Find(universityId);
            if (university == null)
            {
                return null;
            }
            return university;
        }

        public IEnumerable<University> GetAllUniversities()
        {
            return _dbContext.Universities.ToList();
        }

        public IEnumerable<object> GetUniversitiesShortNames()
        {
            var universities = _dbContext.Universities.Select(u => new { Id = u.Id, ShortName = u.ShortName }).ToList();
            return universities.Select(u => new { Id = u.Id, ShortName = u.ShortName });
        }

        public void InsertUniversity(University university)
        {
            if (university == null)
            {
                return;
            }
            _dbContext.Add(university);
            Save();
        }

        public void UpdateUniversity(University university)
        {
            if (university == null)
            {
                return;
            }
            _dbContext.Entry(university).State =
            Microsoft.EntityFrameworkCore.EntityState.Modified;
            Save();
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }
    }
}
