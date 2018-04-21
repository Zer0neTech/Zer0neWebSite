using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zer0neWebSite.Common
{
    public static class Validations
    {
        public static bool IsEmail(string email)
        {
            try
            {
                //var addr = new System.Net.Mail.MailAddress(email);
                //return addr.Address == email;

                var foo = new System.ComponentModel.DataAnnotations.EmailAddressAttribute();
                return foo.IsValid(email);
            }
            catch
            {
                return false;
            }
        }
    }
}
