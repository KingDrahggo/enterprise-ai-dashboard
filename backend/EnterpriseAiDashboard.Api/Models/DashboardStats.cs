namespace EnterpriseAiDashboard.Api.Models
{
    public class DashboardStats
    {
        public int TotalUsers { get; set; }
        public int ActiveSessions { get; set; }
        public double AiUtilizationRate { get; set; }
        public int AlertsTriggered { get; set; }
    }

    public class RecentActivity
    {
        public string Id { get; set; } = string.Empty;
        public string Action { get; set; } = string.Empty;
        public DateTime Timestamp { get; set; }
        public string User { get; set; } = string.Empty;
    }

    public class DashboardData
    {
        public DashboardStats Stats { get; set; } = new();
        public List<RecentActivity> Activities { get; set; } = new();
    }
}
