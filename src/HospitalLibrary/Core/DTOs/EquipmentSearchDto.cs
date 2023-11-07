using HospitalLibrary.Core.Model;

namespace HospitalLibrary.Core.DTOs
{
    public class EquipmentSearchDto
    {
        public int Id { get; set; }
        public Company Company { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
    }
}