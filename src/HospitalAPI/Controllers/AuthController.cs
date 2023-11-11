using HospitalLibrary.Core.DTOs;
using HospitalLibrary.Core.Model;
using HospitalLibrary.Core.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;
        private readonly IUserService _userService;

        public AuthenticationController(IAuthenticationService authenticationService, IUserService userService)
        {
            _authenticationService = authenticationService;
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Authenticate(AuthenticationDto authenticationDto)
        {
            var user = _userService.GetByUsername(authenticationDto.Username);
            if (user == null || !BCrypt.Net.BCrypt.Verify(authenticationDto.Password, user.Password)) return NotFound("Username or password is incorrect");
            var token = _authenticationService.Authenticate(user.Id, user.FirstName, user.UserRole);

            var role = user.UserRole switch
            {
                Role.Employee => 0,
                Role.CompanyAdmin => 1,
                _ => 2
            };

            var dto = new AuthenticatedUserDto
            {
                Username = user.Username,
                Id = user.Id,
                Token = token.Token,
                Role = role,
                Activated = user.Activated
            };

            if (dto.Activated == false) return BadRequest("Activate your profile by clicking link in email!");
            return Ok(dto);
        }
    }
}