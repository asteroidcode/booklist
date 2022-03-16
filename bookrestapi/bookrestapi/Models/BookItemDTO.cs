using System.ComponentModel.DataAnnotations;

namespace bookrestapi.Models
{
    public class BookItemDTO
    {
        public long Id { get; set; }
        [StringLength(200)]
        public string? Title { get; set; }
        [StringLength(200)]
        public string? Author { get; set; }
        [StringLength(5000)]
        public string? Description { get; set; }
    }
}
