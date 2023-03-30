using System.Collections.Generic;
using WAD.API._11456.Models;

namespace WAD.API._11456.Interfaces
{
    public interface IBlogRepository
    {
        void InsertBlog(Blog blog);
        void UpdateBlog(Blog blog);
        void DeleteBlog(int blogId);
        Blog GetBlogById(int blogId);
        IEnumerable<Blog> GetAllBlogs();
    }
}
