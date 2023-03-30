using Microsoft.AspNetCore.Mvc;
using System.Transactions;
using WAD.API._11456.Interfaces;
using WAD.API._11456.Models;

namespace WAD.API._11456.Controllers
{
    [Route("api/blogs")]
    [ApiController]
    public class BlogController: ControllerBase
    {
            private readonly IBlogRepository _blogRepository;
            public BlogController(IBlogRepository blogRepository)
            {
                _blogRepository = blogRepository;
            }

            // GET: api/blogs
            [HttpGet]
            public IActionResult Get()
            {
                var blogs = _blogRepository.GetAllBlogs();
                return new OkObjectResult(blogs);
            }

            // GET: api/blogs/:id
            [HttpGet("{id}", Name = "GetById")]
            public IActionResult Get(int id)
            {
                var blog = _blogRepository.GetBlogById(id);

                if (blog == null)
                {
                    return new NotFoundObjectResult(new {message = "No blog with such ID", status = 404});
                }
                return new OkObjectResult(blog);
            }

            // POST: api/blogs
            [HttpPost]
            public IActionResult Post([FromBody] Blog blog)
            {
                using (var scope = new TransactionScope())
                {
                    _blogRepository.InsertBlog(blog);
                    scope.Complete();
                    return CreatedAtAction(nameof(Get), new { id = blog.Id }, blog);
                }
            }

            // PUT: api/blogs/:id
            [HttpPut("{id}")]
            public IActionResult Put([FromBody] Blog blog)
            {
                if (blog != null)
                {
                    using (var scope = new TransactionScope())
                    {
                        _blogRepository.UpdateBlog(blog);
                        scope.Complete();
                        return new OkObjectResult(new { message = "Successfuly Updated", status = 202 });
                }
                }
                return new NoContentResult();
            }

            // DELETE: api/blogs/:id
            [HttpDelete("{id}")]
            public IActionResult Delete(int id)
            {
                _blogRepository.DeleteBlog(id);
                return new OkObjectResult(new { message = "Successfuly Deteled", status = 204 });
            }
        }
}
