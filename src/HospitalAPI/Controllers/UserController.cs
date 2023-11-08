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
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IEmailService _emailService;

        public UsersController(IUserService userService, IEmailService emailService)
        {
            _userService = userService;
            _emailService = emailService;
        }


        [AllowAnonymous]
        [HttpPost("userRegistration")]
        public async Task<IActionResult> Register(RegistrationDto dto)
        {
            var newUser = new User
            {
                Username = dto.Username,
                UserRole = Role.Employee,
                Password = dto.Password,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                City = dto.City,
                Country = dto.Country,
                PhoneNumber = dto.PhoneNumber,
                Job = dto.Job,
                CompanyId = dto.CompanyId,
                Activated = false,
                CancelCount = 0
            };

            if (_userService.ExistsByUsername(newUser.Username))
                return BadRequest(
                    "Username are already taken.");
            if (!ModelState.IsValid) return BadRequest(ModelState);
            newUser.ConfirmationToken = Guid.NewGuid().ToString();

            _userService.Create(newUser);

            var isEmailSent =
                await _emailService.SendConfirmationEMail(newUser.Email, newUser.FirstName, newUser.ConfirmationToken);
            Console.WriteLine(isEmailSent ? "Email sent successfully." : "Email sending failed.");
            var user = _userService.GetByUsernameAndPassword(newUser.Username, newUser.Password);

            return Ok(user);
        }

        [HttpPost("adminRegistration")]
       // [Authorize(Policy = "SystemAdminPolicy")]
        public async Task<IActionResult> RegisterBySystemAdmin(RegistrationDto dto)
        { 
          
            var newUser = new User
            {
                Username = dto.Username,
                UserRole = dto.UserRole,
                Password = dto.Password,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                City = dto.City,
                Country = dto.Country,
                PhoneNumber = dto.PhoneNumber,
                Job = dto.Job,
                CompanyId = dto.CompanyId,
                Activated = false,
                CancelCount = 0
            };
            
            switch (dto.UserRole)
            {
                case Role.SystemAdmin:
                    newUser.CompanyId = 0;
                    break;
                case Role.CompanyAdmin when _userService.FindCompanyAdmin(dto.CompanyId) != null:
                    return BadRequest("Already registered admin for this company");
            }

            if (_userService.ExistsByUsername(newUser.Username))
                return BadRequest(
                    "Username are already taken.");
            if (!ModelState.IsValid) return BadRequest(ModelState);
         
            newUser.ConfirmationToken = Guid.NewGuid().ToString();

            _userService.Create(newUser);

            var isEmailSent =
                await _emailService.SendConfirmationEMail(newUser.Email, newUser.FirstName, newUser.ConfirmationToken);
            Console.WriteLine(isEmailSent ? "Email sent successfully." : "Email sending failed.");
            var user = _userService.GetByUsernameAndPassword(newUser.Username, newUser.Password);

            return Ok(user);
        }

        [AllowAnonymous]
        [HttpGet("confirmRegistration")]
        public IActionResult ConfirmRegistration(string token)
        {
            var user = _userService.GetUserByConfirmationToken(token);

            if (user == null)
            {
                return BadRequest("Invalid or expired confirmation token.");
            }

            user.Activated = true;
            user.ConfirmationToken = null;

            _userService.Update(user);

            return Ok("Registration confirmed. You can now log in.");
        }


        [Authorize]
        [HttpGet("getCurrentUser")]
        public ActionResult GetCurrentUser(int id)
        {
            var user = _userService.GetById(id);
            if (user == null) return NotFound();
            return Ok(user);
        }
    }
}