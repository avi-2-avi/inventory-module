using System;
using System.Collections.Generic;

namespace InventoryModule.Models
{
    public partial class Item
    {
        public int Id { get; set; }
        public string Code { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int Quantity { get; set; }
    }
}
