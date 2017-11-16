using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebCamJS.Controllers
{
    public class WebcamController : Controller
    {
        // GET: Webcam
        public ActionResult Index()
        {
            return View();
        }

        
        public ActionResult ReloadWebcam()
        {
            return View("Index");
        }
    }
}