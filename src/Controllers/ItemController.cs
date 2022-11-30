using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using InventoryModule.Models;
using Microsoft.EntityFrameworkCore;

namespace InventoryModule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly InventoryContext _dbcontext;
        
        public ItemController(InventoryContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("PaginateItems")]
        public async Task<IActionResult> PaginateItems()
        {
            List<Item> list = await _dbcontext.Items.OrderBy(c => c.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpPost]
        [Route("CreateItem")]
        public async Task<IActionResult> CreateItem([FromBody] Item request)
        {
            await _dbcontext.Items.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }

        [HttpPut]
        [Route("UpdateItem")]
        public async Task<IActionResult> UpdateItem([FromBody] Item request)
        {
            _dbcontext.Items.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }

        [HttpDelete]
        [Route("DeleteItem/{id:int}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            Item item = _dbcontext.Items.Find(id);

            if (item == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "ERROR");
            }
            _dbcontext.Items.Remove(item);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "OK");
        }


    }
}
