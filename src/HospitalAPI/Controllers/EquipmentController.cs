using System.Collections.Generic;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalAPI.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {
        private readonly IEquipmentService _equipmentService;

        public EquipmentController(IEquipmentService roomService)
        {
            _equipmentService = roomService;
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult GetAll()
        {
            return Ok(_equipmentService.GetAll());
        }
        
        
        [AllowAnonymous]
        [HttpGet("company{id}")]
        public ActionResult GetByCompanyId(int id)
        {
            return Ok(_equipmentService.GetByCompanyId(id));
        }
        
        [AllowAnonymous]
        [HttpGet("search")]
        public ActionResult<List<Equipment>> SearchByNameOrCompany(string searchQuery)
        {
            var result = _equipmentService.SearchByNameOrCompany(searchQuery);
            return Ok(result);
        }
    }
}