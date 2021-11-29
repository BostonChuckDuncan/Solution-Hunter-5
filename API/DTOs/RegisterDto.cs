using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        [MinLength(3, ErrorMessage="user name minimum length of 3")]
        public string Username { get; set; }
        
        [Required]
        [MinLength(8, ErrorMessage = "password minimum length of 8")]
        public string Password { get; set; }

        public string KnownAs { get; set; }
    }
}
