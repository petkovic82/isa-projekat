using System;
using System.Threading.Tasks;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;
        private readonly IEmailService _emailService;
        private readonly IUserService _userService;
        private readonly IEquipmentService _equipmentService;

        public AppointmentController(IAppointmentService appointmentService, IEmailService emailService,
            IUserService userService,
            IEquipmentService equipmentService)
        {
            _appointmentService = appointmentService;
            _userService = userService;
            _emailService = emailService;
            _equipmentService = equipmentService;
        }


        // [Authorize]
        [HttpGet("{id}")]
        public ActionResult GetCreatedByEquipmentId(int id)
        {
            var user = _appointmentService.GetCreatedByEquipmentId(id);
            if (user == null) return NotFound();
            return Ok(user);
        }


        
         
        [HttpGet("employee{id}")]
        [Authorize(Policy = "EmployeePolicy")]
        public ActionResult GetByEmployeeId(int id)
        {
            var user = _appointmentService.GetByEmployeeId(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpPut("book")]
        [Authorize(Policy = "EmployeePolicy")]
        public async Task<IActionResult> Book(AppointmentDto dto)
        {
            if (_appointmentService.CanEmployeeBook(dto) == false)
                return BadRequest(
                    "Cant book in same company at the same time");

         

            var equipment = (Equipment)_equipmentService.GetById(dto.EquipmentId);
            var user = _userService.GetById(dto.EmployeeId);

            var bookApp = new Appointment()
            {
                Id = dto.Id,
                EmployeeId =  dto.EmployeeId, 
                EquipmentId = dto.EquipmentId,
                Quantity = dto.Quantity,
                Price = dto.Price,
                State = State.Booked, 
                Date = dto.Date, 
                RowVersion = dto.RowVersion 
            };
            

            if (equipment != null)
            {
                bookApp.Price = equipment.Price * bookApp.Quantity;
                
                equipment.Quantity -= bookApp.Quantity;
                dto.EquipmentName = equipment.Name;
                
                _appointmentService.Book(bookApp);
                _equipmentService.Update(equipment);
            }

            dto.EmployeeFullName = user.FirstName + ' ' + user.LastName;
            dto.Price = bookApp.Price;
            dto.State = bookApp.State;
            var isEmailSent =
                await _emailService.SendQrMail(user.Email, user.FirstName, dto);
            Console.WriteLine(isEmailSent ? "Email sent successfully." : "Email sending failed.");

            return Ok(bookApp);
        }


        
        [HttpPut("cancel")]
        [Authorize(Policy = "EmployeePolicy")]
        public void Cancel(int appId)
        {
            _appointmentService.Cancel(appId);
        }


        [HttpPost("create")]
        [Authorize(Policy = "CompanyAdminPolicy")]
        public async Task<IActionResult> Create(AppointmentDto dto)
        {
            var newApp = new Appointment
            {
                EmployeeId = 0,
                EquipmentId = dto.EquipmentId,
                Quantity = 0,
                Price = 0,
                State = State.Available,
                Date = dto.Date,
                RowVersion = new Guid("61F689EA-5C7A-4610-BE8A-15BDAD07D8A5")
            };

            _appointmentService.Create(newApp);
            return Ok(newApp);
        }
    }
}