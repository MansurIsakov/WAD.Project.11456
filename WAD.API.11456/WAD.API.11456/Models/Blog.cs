namespace WAD.API._11456.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string CoverImage { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public string CreatedAt { get; set; }
        public int LikeCount { get; set; }
        public University University { get; set; }
    }
}
