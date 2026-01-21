// Minimal API setup using top-level statements (C# 10+)
// No need for Main method or Program class
var builder = WebApplication.CreateBuilder(args);

// ===== SERVICE REGISTRATION =====
// Add services to the dependency injection container

// Controllers - Enables MVC/API controller support
builder.Services.AddControllers();

// API Explorer - Required for Swagger documentation
builder.Services.AddEndpointsApiExplorer();

// Swagger - API documentation and testing UI
builder.Services.AddSwaggerGen();

// CORS Configuration
// Allows Angular frontend (localhost:4200) to make requests
// Without this, browsers will block cross-origin requests
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
            policy.WithOrigins("http://localhost:4200")  // Angular dev server
                  .AllowAnyHeader()                       // Allow all headers
                  .AllowAnyMethod());                     // Allow GET, POST, etc.
});

// Build the application
var app = builder.Build();

// ===== MIDDLEWARE PIPELINE =====
// Order matters! Middleware executes in the order added

// Development-only middleware
if (app.Environment.IsDevelopment())
{
    // Swagger UI - Available at /swagger
    app.UseSwagger();
    app.UseSwaggerUI();
}

// CORS - Must come before authorization and endpoints
// Processes CORS headers for all requests
app.UseCors("AllowAngular");

// HTTPS Redirection (optional for development)
// Uncomment for production deployment
// app.UseHttpsRedirection();

// Map Controllers - Enables attribute routing
// Routes defined in [Route] attributes on controllers
app.MapControllers();

// Start the application
// Listens on http://localhost:5259 (configured in launchSettings.json)
app.Run();
