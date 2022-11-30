using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using InventoryModule.Models;

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
        
        public IActionResult PaginateItems()
        {
            List<Item> list = _dbcontext.Items.ToList();

            return StatusCode(StatusCodes.Status200OK, list);
        }

    }
}
