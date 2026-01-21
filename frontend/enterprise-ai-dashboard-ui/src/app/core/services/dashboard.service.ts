import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

/**
 * TypeScript Interfaces
 * 
 * These define the shape of data returned from the backend
 * Provides compile-time type checking and IntelliSense support
 * 
 * IMPORTANT: Property names must match backend JSON (camelCase)
 * .NET serializes to camelCase by default
 */

export interface DashboardStats {
  totalUsers: number;
  activeSessions: number;
  aiUtilizationRate: number;
  alertsTriggered: number;
}

export interface RecentActivity {
  id: string;
  action: string;
  timestamp: string;
  user: string;
}

export interface DashboardData {
  stats: DashboardStats;
  activities: RecentActivity[];
}

export interface AiResponse {
  response: string;
  confidence: number;
  processedAt: string;
}

/**
 * Dashboard Service
 * 
 * Handles all dashboard-related API calls
 * 
 * Design Pattern: Service Layer
 * - Centralizes business logic
 * - Makes components simpler and more testable
 * - Provides a single source of truth for data access
 * 
 * Uses RxJS Observables for async operations
 * - Allows for powerful operators (map, filter, retry, etc.)
 * - Supports cancellation
 * - Integrates well with Angular's async pipe
 */
@Injectable({
  providedIn: 'root'  // Singleton service available app-wide
})
export class DashboardService {

  constructor(private api: ApiService) { }

  /**
   * Fetch dashboard statistics and activity
   * @returns Observable of DashboardData
   */
  getDashboardData(): Observable<DashboardData> {
    return this.api.get<DashboardData>('dashboard');
  }

  /**
   * Send prompt to AI and get response
   * 
   * CRITICAL: Property name must be 'Prompt' (capital P)
   * This matches the C# model property name
   * .NET expects PascalCase in request bodies
   * 
   * @param prompt User's question/command
   * @returns Observable of AiResponse
   */
  askAi(prompt: string): Observable<AiResponse> {
    return this.api.post<AiResponse>('ai/ask', { Prompt: prompt });
  }
}
