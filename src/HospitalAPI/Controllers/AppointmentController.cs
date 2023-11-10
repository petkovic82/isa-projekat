﻿using System;
using System.Threading.Tasks;
using FluentResults;
using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Service;
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
        
        
        // [Authorize]
        [HttpGet("employee{id}")]
        public ActionResult GetByEmployeeId(int id)
        {
            var user = _appointmentService.GetByEmployeeId(id);
            if (user == null) return NotFound();
            return Ok(user);
        }
        
        [HttpPut("book")]
        // [Authorize(Policy = "EmployeePolicy")]
        public async Task<IActionResult> Book(AppointmentDto dto)
        {
            if (_appointmentService.CanEmployeeBook(dto) ==  false)
                return BadRequest(
                    "Cant book in same company at the same time");
            
            var app =_appointmentService.GetById(dto.Id);
            app.EmployeeId = dto.EmployeeId;
            app.State = State.InProgress;
            
            _appointmentService.Update(app);
            
            var user = _userService.GetById(dto.EmployeeId);
            var equipment = (Equipment)_equipmentService.GetById(dto.EquipmentId);
            if (equipment != null) dto.EquipmentName = equipment.Name;
            dto.EmployeeFullName = user.FirstName + ' '+ user.LastName;
            var isEmailSent =
             await _emailService.SendQrMail(user.Email, user.FirstName, dto);
             Console.WriteLine(isEmailSent ? "Email sent successfully." : "Email sending failed.");


            return Ok(app);
        }
        
        
        //decline
        [HttpPut("cancel")]
        // [Authorize(Policy = "EmployeePolicy")]
        public void Cancel(int appId)
        {
            _appointmentService.Cancel(appId);
        }
        
        
        [HttpPost("create")]
        // [Authorize(Policy = "CompanyAdminPolicy")]
        public async Task<IActionResult> Create(AppointmentDto dto)
        {
            var newApp = new Appointment
            {
                EmployeeId = 0,
                EquipmentId = dto.EquipmentId,
                Quantity = 0,
                Price = dto.Price,
                State = State.Created,
                Date = DateTime.Now
            };
            
            _appointmentService.Create(newApp);
            return Ok(newApp);
        }
        
    }


}