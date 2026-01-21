# Enterprise AI Dashboard

A modern, full-stack enterprise dashboard built with .NET 8 and Angular, featuring AI-powered insights and a stunning neon dark theme.

![Dashboard Screenshot](https://github.com/KingDrahggo/enterprise-ai-dashboard/blob/main/screenshots/dashboard.png)

## 🚀 Features

- **Real-time Dashboard**: Live statistics with animated stat cards
- **AI Chat Assistant**: Keyword-based AI responses for system analysis
- **Analytics Visualization**: Interactive charts and metrics
- **Neon Dark Theme**: Modern, eye-catching design with CSS variables
- **Responsive Layout**: Works on desktop and mobile devices
- **RESTful API**: Clean .NET 8 Web API architecture

## 🛠️ Tech Stack

### Backend
- .NET 8
- ASP.NET Core Web API
- Minimal API pattern
- CORS enabled

### Frontend
- Angular 19+
- TypeScript
- SCSS with CSS Variables
- Standalone Components
- RxJS for reactive programming

## 📋 Prerequisites

- [.NET SDK 8.0+](https://dotnet.microsoft.com/download)
- [Node.js 18+](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone git@github.com:KingDrahggo/enterprise-ai-dashboard.git
cd enterprise-ai-dashboard
```

### 2. Start the Backend
```bash
cd backend/EnterpriseAiDashboard.Api
dotnet run
```
Backend will run at `http://localhost:5259`

### 3. Start the Frontend
```bash
cd frontend/enterprise-ai-dashboard-ui
npm install
ng serve
```
Frontend will run at `http://localhost:4200`

### 4. Open in Browser
Navigate to `http://localhost:4200` and explore the dashboard!

## 📖 Documentation

- **[Replication Guide](docs/replication-guide.md)**: Complete step-by-step guide to build this from scratch
- **[Walkthrough](docs/walkthrough.md)**: Feature overview and testing instructions
- **[Architecture](docs/architecture.md)**: System design and patterns used

## 🎯 Key Features Explained

### AI Assistant
The AI chat assistant uses keyword-based pattern matching to provide insights:
- **"Status Check"** → System health report
- **"Analyze Risks"** → Security analysis
- **"User Traffic"** → User analytics

### Dashboard Metrics
- Total Users: 12,450
- Active Sessions: 843
- AI Utilization: 78.5%
- Security Alerts: 2

### Analytics Page
Visual bar chart showing system performance metrics over the last 6 hours.

## 🏗️ Project Structure

```
enterprise-ai-dashboard/
├── backend/
│   └── EnterpriseAiDashboard.Api/
│       ├── Controllers/
│       ├── Models/
│       └── Program.cs
├── frontend/
│   └── enterprise-ai-dashboard-ui/
│       └── src/app/
│           ├── core/services/
│           ├── features/
│           ├── layout/
│           └── styles.scss
└── docs/
```

## 🎨 Design Decisions

### Why Standalone Components?
Angular standalone components eliminate the need for NgModules, making the app more modular and easier to maintain.

### Why CSS Variables?
CSS variables allow for runtime theme changes and better performance compared to SCSS variables.

### Why Keyword Matching for AI?
For prototyping, keyword matching provides instant responses without external API costs. In production, integrate with OpenAI or Azure AI.

## 🐛 Troubleshooting

### CORS Errors
Ensure the backend `Program.cs` has CORS configured for `http://localhost:4200`

### AI Not Responding
1. Check backend is running on port 5259
2. Verify property casing: `Prompt` (capital P) in requests
3. Check browser console for errors

### Port Conflicts
```bash
# Kill process on Windows
taskkill /F /IM dotnet.exe
```

## 🚀 Future Enhancements

- [ ] Real AI integration (OpenAI/Azure AI)
- [ ] User authentication (JWT)
- [ ] Database integration (Entity Framework Core)
- [ ] Real-time updates (SignalR)
- [ ] Unit tests
- [ ] Docker deployment

## 📝 License

MIT License - feel free to use this for your portfolio or learning!

## 👤 Author

**Greg R** - [GitHub](https://github.com/KingDrahggo)

## 🙏 Acknowledgments

Built with guidance from Antigravity AI to demonstrate modern full-stack development patterns.

---

⭐ **Star this repo** if you found it helpful!
