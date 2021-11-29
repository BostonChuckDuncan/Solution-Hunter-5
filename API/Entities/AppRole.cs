using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Entity
{
    public class AppRole : IdentityRole<int>
    {
        public string RoleName { get; set; }

        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}