namespace Models.Configuration
{
    public class ApiSettingsOptions
    {
        public const string ApiSettings = "ApiSettings";

        public string InvoiceUrl { get; set; }
        public string OrderUrl { get; set; }
        public string SearchUrl { get; set; }
    }
}