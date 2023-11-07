using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalLibrary.Core.Model
{
    public class Equipment
    {
        [Key]
        public int Id { get; set; }
        
        [ForeignKey("Company")]
        public int CompanyId { get; set; }

        public virtual Company Company { get; set; } 
        public string Name { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set;  }

        bool IsAvailable()
        {
            return Quantity > 0;
        }
        
        void DecreaseQuantity()
        {
            Quantity--;
        }
        
        
    }
}