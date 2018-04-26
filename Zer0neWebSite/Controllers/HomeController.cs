using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Zer0neWebSite.Models;

namespace Zer0neWebSite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SendEmail(EmailFormModel emailForm)
        {
            try
            {
                SmtpClient client = new SmtpClient("smtp.zoho.com", 587);
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential("info@zer0ne.tech", pass);
                client.EnableSsl = true;

                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress("sales@zer0ne.tech");
                mailMessage.To.Add("info@zer0ne.tech");
                if(Common.Validations.IsEmail(emailForm.Email))
                mailMessage.To.Add(emailForm.Email);

                mailMessage.Subject = "رسالة من موقع زير ون Zer0ne.tech";
                mailMessage.Body = "Name: " + emailForm.Name + Environment.NewLine +
                    "Email: " + emailForm.Email + Environment.NewLine +
                    "Mobile: " + emailForm.Mobile + Environment.NewLine +
                    "Message: " + emailForm.Message;

                client.Send(mailMessage);
            }
            catch(Exception ex)
            {
                throw ex;
            }



            //return RedirectToAction("Index", emailForm);
            return Json(emailForm);
            //return Json(new { success = true });
            //return Json(emailForm, JsonRequestBehaviour.AllowGet);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
