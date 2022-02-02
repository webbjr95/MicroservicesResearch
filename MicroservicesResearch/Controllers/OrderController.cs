using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [EnableCors]
    [ApiController]
    public class OrderController : Controller
    {
        public OrderController() { }

        [HttpGet]
        [Route("GetOrders")]
        public JsonResult GetOrders()
        {
            return new JsonResult("");
        }
    }
}