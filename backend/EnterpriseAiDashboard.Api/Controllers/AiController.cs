using Microsoft.AspNetCore.Mvc;
using EnterpriseAiDashboard.Api.Models;

namespace EnterpriseAiDashboard.Api.Controllers
{
    /// <summary>
    /// AI Controller - Handles AI-powered analysis requests
    /// 
    /// Design Decision: Using keyword-based matching for MVP/prototype
    /// In production, this would integrate with:
    /// - OpenAI API (GPT-4, etc.)
    /// - Azure AI Services
    /// - Custom ML models
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class AiController : ControllerBase
    {
        /// <summary>
        /// POST /api/ai/ask - Process AI queries
        /// </summary>
        /// <param name="request">Contains the user's prompt</param>
        /// <returns>AI-generated response with confidence score</returns>
        [HttpPost("ask")]
        public IActionResult AskAi([FromBody] AiRequest request)
        {
            // Keyword-based response system
            // This simulates AI behavior without external API calls
            string output;
            var p = request.Prompt.ToLower();

            // Pattern matching for different query types
            // Each condition handles a specific domain of questions
            
            if (p.Contains("status") || p.Contains("system"))
            {
                // System health queries
                output = "SYSTEM STATUS: NORMAL\n- CPU Load: 45%\n- Memory Usage: 3.2GB\n- All services operational.";
            }
            else if (p.Contains("risk") || p.Contains("security"))
            {
                // Security analysis queries
                output = "SECURITY ANALYSIS:\n- Threat Level: LOW\n- 2 minor alerts detected in the last hour.\n- Firewall integrity: 100%";
            }
            else if (p.Contains("user") || p.Contains("traffic"))
            {
                // User analytics queries
                output = "USER INSIGHTS:\n- Active Users: 12,450\n- Peak Traffic: 09:30 AM\n- Retention rate up by 2.5% this week.";
            }
            else if (p.Contains("hello") || p.Contains("hi"))
            {
                // Greeting/help queries
                output = "Hello! I am your Enterprise Assistant. I can help you with System Status, Security Risks, or User Traffic analysis.";
            }
            else
            {
                // Fallback for unrecognized queries
                // Provides helpful guidance to the user
                output = $"I processed your query: '{request.Prompt}'.\nCurrently, I am tuned to analyze 'System', 'Security', or 'User' data. Please refine your command.";
            }

            // Build response object
            // Confidence is set high (0.98) for keyword matches
            // In production, this would be calculated by the AI model
            var response = new AiResponse
            {
                ProcessedAt = DateTime.UtcNow,
                Confidence = 0.98,
                Response = output
            };

            // Return 200 OK with JSON payload
            // ASP.NET Core automatically serializes to JSON
            return Ok(response);
        }
    }
}
