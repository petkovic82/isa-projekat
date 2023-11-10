using System.Collections.Generic;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService _companyService;

        public CompanyController(ICompanyService roomService)
        {
            _companyService = roomService;
        }


        [AllowAnonymous]
        [HttpGet]
        public ActionResult GetAll()
        {
            return Ok(_companyService.GetAll());
        }

        [AllowAnonymous]
        [HttpGet("search")]
        public ActionResult<List<Company>> SearchByName(string searchQuery)
        {
            var result = _companyService.SearchByName(searchQuery);
            return Ok(result);
        }
    }
}