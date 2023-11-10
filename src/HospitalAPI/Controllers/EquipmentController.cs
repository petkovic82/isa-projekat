using System.Collections.Generic;
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

        //samo sme employee
        [AllowAnonymous]
        [HttpGet("search{companyId}")]
        public ActionResult<List<Equipment>> SearchByNameInCompany(string searchQuery, int companyId)
        {
            var result = _equipmentService.SearchByNameInCompany(searchQuery, companyId);
            return Ok(result);
        }

        // [Authorize]
        [HttpGet("{id}")]
        public ActionResult GetById(int id)
        {
            var user = _equipmentService.GetById(id);
            if (user == null) return NotFound();
            return Ok(user);
        }
    }
}