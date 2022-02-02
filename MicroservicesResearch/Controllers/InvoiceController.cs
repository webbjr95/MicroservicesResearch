using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [EnableCors]    
    [ApiController]
    public class InvoiceController : Controller
    {
        public InvoiceController() { }

        [HttpGet]
        [Route("GetInvoices")]
        public JsonResult GetInvoices()
        {
            return new JsonResult("");
        }
    }
}