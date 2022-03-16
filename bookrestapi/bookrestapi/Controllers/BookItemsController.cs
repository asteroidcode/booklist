#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bookrestapi.Models;

namespace bookrestapi.Controllers
{
    [Route("api/BookItems")]
    [ApiController]
    public class BookItemsController : ControllerBase
    {
        private readonly BookContext _context;

        public BookItemsController(BookContext context)
        {
            _context = context;
        }

        // GET: api/BookItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookItemDTO>>> GetBookItems()
        {
            var bookList = await _context.BookItems
                .Select(x => ItemToDTO(x))
                .ToListAsync();

            return bookList.OrderBy(x => x.Id).ToList();
        }

        // GET: api/BookItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookItemDTO>> GetBookItem(long id)
        {
            var bookItem = await _context.BookItems.FindAsync(id);

            if (bookItem == null)
            {
                return NotFound();
            }

            return ItemToDTO(bookItem);
        }

        // PUT: api/BookItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookItem(long id, BookItemDTO bookItemDTO)
        {
            if (id != bookItemDTO.Id)
            {
                return BadRequest();
            }

            var bookItem = await _context.BookItems.FindAsync(id);
            if (bookItem == null)
            {
                return NotFound();
            }

            bookItem.Title = bookItemDTO.Title;
            bookItem.Author = bookItemDTO.Author;
            bookItem.Description = bookItemDTO.Description;

            _context.Entry(bookItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BookItems
        [HttpPost]
        public async Task<ActionResult<BookItemDTO>> PostBookItem(BookItemDTO bookItemDTO)
        {
            var bookItem = new BookItem
            {
                Title = bookItemDTO.Title,
                Author = bookItemDTO.Author,
                Description = bookItemDTO.Description
            };

            _context.BookItems.Add(bookItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBookItem), new { id = bookItem.Id }, ItemToDTO(bookItem));
        }

        // DELETE: api/BookItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookItem(long id)
        {
            var bookItem = await _context.BookItems.FindAsync(id);
            if (bookItem == null)
            {
                return NotFound();
            }

            _context.BookItems.Remove(bookItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookItemExists(long id)
        {
            return _context.BookItems.Any(e => e.Id == id);
        }

        private static BookItemDTO ItemToDTO(BookItem bookItem) =>
            new BookItemDTO
            {
                Id = bookItem.Id,
                Title = bookItem.Title,
                Author = bookItem.Author,
                Description = bookItem.Description
            };

    }
}
