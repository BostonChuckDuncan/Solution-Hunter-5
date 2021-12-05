using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Entity;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
//        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        private readonly UserManager<AppUser> userManager;

        public IMapper _mapper { get; }
        public RoleManager<AppRole> _roleManager { get; }
        public UserManager<AppUser> _userManager { get; }

        public AccountController(DataContext context,
                        ITokenService tokenService,
                        IMapper mapper,
                        RoleManager<AppRole> roleManager,
                        UserManager<AppUser> userManager)
        {
            _mapper = mapper;
            _roleManager = roleManager;
            _userManager = userManager;
            // _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

            var user = _mapper.Map<AppUser>(registerDto);

            user.UserName = registerDto.Username.ToLower();

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            var roleResult = await _userManager.AddToRoleAsync(user, "Member");

            if (!roleResult.Succeeded) return BadRequest(result.Errors);

            return new UserDto()
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user),
                KnownAs = user.KnownAs
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            // To install the application, user enters blank username and password AND 
            //   if the user's list is empty, create an Admin user.  The user is then
            //   expected to login as Admin and change the password.
            if (await AnyUsersExist() == false && loginDto.Username == ""
                            && loginDto.Password == "")
            {
                RegisterDto adminDto = new RegisterDto
                {
                    Username = "admin",
                    Password = "password"
                };
                await Register(adminDto);

                // var result = await _userManager.CreateAsync(user, registerDto.Password);


                // var roleResult = await _userManager.AddToRoleAsync(user, "Member");


                // initialize the list of roles
                var roles = new List<AppRole>
                {
                    new AppRole { Name = "Admin" },
                    new AppRole { Name = "Lead" },
                    new AppRole { Name = "Tester" },
                    new AppRole { Name = "Member" },
                    new AppRole { Name = "Trial" },
                    new AppRole { Name = "Visitor" }
                };

                foreach (var role in roles)
                {
                    await _roleManager.CreateAsync(role);
                };

                var adminUser = await _userManager.FindByNameAsync("admin");
                IEnumerable<string> adminRoles = new List<string>() 
                    { "Admin", "Lead", "Tester", "Member", "Visitor" };
                await _userManager.AddToRolesAsync(adminUser, adminRoles);

                return null;
            }

            bool hasUsers = await _userManager.Users.AnyAsync();
            if (!hasUsers && loginDto.Username.Length == 0 && loginDto.Password.Length == 0)
            {
                // create a default admin - The new admin must change password right away!
                // error for now
                throw new System.Exception("System not Initialize! Contact Solution Hunter Engineering");
            }

            var user = await _userManager.Users
                .SingleOrDefaultAsync(x => x.UserName == loginDto.Username);

            if (user == null) return Unauthorized("Unauthorized User");

            return new UserDto()
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user),
                KnownAs = user.KnownAs
            };

        }

        private async Task<bool> UserExists(string username)
        {
            return await _userManager.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

        private async Task<bool> AnyUsersExist()
        {
            return (await _userManager.Users.CountAsync()) != 0;
        }
    }
}
