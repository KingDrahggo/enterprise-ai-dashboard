using Microsoft.AspNetCore.Mvc;
using EnterpriseAiDashboard.Api.Models;

namespace EnterpriseAiDashboard.Api.Controllers
{
    /// <summary>
    /// Dashboard Controller - Provides dashboard statistics and activity data
    /// 
    /// Design Decision: Using simulated data for prototype
    /// In production, this would query:
    /// - Database (Entity Framework Core)
    /// - External APIs
    /// - Caching layer (Redis)
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        /// <summary>
        /// GET /api/dashboard - Retrieve dashboard data
        /// </summary>
        /// <returns>Dashboard statistics and recent activity</returns>
        [HttpGet]
        public IActionResult GetDashboardData()
        {
            // Simulate real-time data
            // In production, this would come from a database query
            var data = new DashboardData
            {
                Stats = new DashboardStats
                {
                    TotalUsers = 12450,
                    ActiveSessions = 843,
                    AiUtilizationRate = 78.5,
                    AlertsTriggered = 2
                },
                Activities = new List<RecentActivity>
                {
                    // Recent activity log entries
                    // Timestamps use DateTime for proper serialization
                    new() { Action = "AI Model Retraining Started", User = "System", Timestamp = DateTime.UtcNow.AddMinutes(-5) },
                    new() { Action = "User Login Failed", User = "admin_smith", Timestamp = DateTime.UtcNow.AddMinutes(-12) },
                    new() { Action = "New Data Source Connected", User = "data_engineer", Timestamp = DateTime.UtcNow.AddMinutes(-23) },
                    new() { Action = "Report Generated", User = "System", Timestamp = DateTime.UtcNow.AddMinutes(-45) }
                }
            };

            // Return 200 OK with JSON payload
            return Ok(data);
        }
    }
}
