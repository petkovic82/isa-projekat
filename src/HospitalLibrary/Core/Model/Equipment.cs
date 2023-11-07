using System.ComponentModel.DataAnnotations;

namespace HospitalLibrary.Core.Model
{
    public class Equipment
    {
        [Key]
        public int Id { get; set; }
        public Company Company { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        
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