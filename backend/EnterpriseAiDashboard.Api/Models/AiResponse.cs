namespace EnterpriseAiDashboard.Api.Models
{
    public class AiRequest
    {
        public string Prompt { get; set; } = string.Empty;
    }

    public class AiResponse
    {
        public string Response { get; set; } = string.Empty;
        public double Confidence { get; set; }
        public DateTime ProcessedAt { get; set; }
    }
}
