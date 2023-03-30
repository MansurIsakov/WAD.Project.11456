using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using WAD.API._11456.Context;
using WAD.API._11456.Interfaces;
using WAD.API._11456.Models;

namespace WAD.API._11456.Repository
{
    public class BlogRepository: IBlogRepository
    {
        private readonly UniContext _dbContext;
        public BlogRepository(UniContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void DeleteBlog (int blogId)
        {
            var blog = _dbContext.Blogs.Find(blogId);
            if (blog == null)
            {
                return;
            }
            _dbContext.Blogs.Remove(blog);
            Save();
        }

        public Blog GetBlogById(int blogId)
        {
            var blog = _dbContext.Blogs.Find(blogId);
            if (blog == null)
                {
                return null;
                }
            _dbContext.Entry(blog).Reference(b => b.University).Load();
            return blog;
        }

        public IEnumerable<Blog> GetAllBlogs()
        {
            return _dbContext.Blogs.Include(b => b.University).ToList();
        }

        public void InsertBlog(Blog blog)
        {
            var uni = _dbContext.Universities.Find(blog.University.Id);
            if (uni == null)
            {
                return;
            }

            blog.University = _dbContext.Universities.Find(blog.University.Id);
            if (blog == null)
            {
                return;
            }
            _dbContext.Add(blog);
            Save();
        }

        public void UpdateBlog(Blog blog)
        {
            if (blog == null)
            {
                return;
            }
            _dbContext.Entry(blog).State =
            Microsoft.EntityFrameworkCore.EntityState.Modified;
            Save();
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }
    }
}
