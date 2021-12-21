using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Models.Configuration;

namespace Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [EnableCors]    
    [ApiController]
    public class ConfigurationController : Controller
    {
        private readonly ApiSettingsOptions _apiSettings; 
        
        public ConfigurationController(IOptions<ApiSettingsOptions> apiSettings)
        {
            _apiSettings = apiSettings.Value;
        }

        [HttpGet]
        [Route("GetConfig")]
        [AllowAnonymous]
        public JsonResult GetConfig()
        {
            return new JsonResult(new WebConfig{
                ApiSettings = _apiSettings
            });
        }
    }
}