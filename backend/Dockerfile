# Use official .NET SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy csproj and restore dependencies
COPY EnterpriseAiDashboard.Api/*.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY EnterpriseAiDashboard.Api/. ./
RUN dotnet publish -c Release -o out

# Use runtime image for final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .

# Expose port (Render will set PORT env variable)
EXPOSE $PORT

# Run the application
ENTRYPOINT ["dotnet", "EnterpriseAiDashboard.Api.dll"]
