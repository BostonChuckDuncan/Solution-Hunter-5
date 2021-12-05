using System.Collections.Generic;
using API.Entity;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppUser : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone1 { get; set; }
        public string Phone2 { get; set; }
        public string KnownAs { get; set; }
        public string EmailAddress { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public bool IsTrialMode { get; set; }

        public ICollection<AppUserRole> UserRoles { get; set; }

    }

}
