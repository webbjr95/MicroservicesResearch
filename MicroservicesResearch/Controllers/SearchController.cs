using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Web;

namespace Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [EnableCors]
    [ApiController]
    public class SearchController : Controller
    {
        public SearchController() { }

        [HttpGet]
        [Route("GetResponsesByQuery")]
        public JsonResult GetResponsesByQuery([FromQuery] string query)
        {
            var decodedQuery = HttpUtility.UrlDecode(query);
            return new JsonResult("");
        }
    }
}