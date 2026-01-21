import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * Generic API Service
 * 
 * Centralizes all HTTP communication with the backend
 * 
 * Benefits:
 * - Single place to configure base URL
 * - Easy to add interceptors (auth tokens, logging, etc.)
 * - Consistent error handling
 * - Type-safe with generics
 * 
 * Design Pattern: Facade Pattern
 * Provides a simplified interface to HttpClient
 */
@Injectable({
  providedIn: 'root'  // Singleton service
})
export class ApiService {
  // Base URL for all API calls
  // Uses environment configuration for dev/prod switching
  // Fallback: if running on Render, use production URL
  private baseUrl = this.getApiUrl();

  constructor(private http: HttpClient) { }

  private getApiUrl(): string {
    // Check if we're running on Render (production)
    if (typeof window !== 'undefined' && window.location.hostname.includes('onrender.com')) {
      return 'https://enterprise-dashboard-api-lsjr.onrender.com/api';
    }
    // Otherwise use environment config
    return environment.apiUrl;
  }

  /**
   * Generic GET request
   * @param endpoint API endpoint (e.g., 'dashboard')
   * @returns Observable of type T
   * 
   * Example: get<DashboardData>('dashboard')
   * Makes request to: http://localhost:5259/api/dashboard
   */
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  /**
   * Generic POST request
   * @param endpoint API endpoint (e.g., 'ai/ask')
   * @param data Request body (will be JSON serialized)
   * @returns Observable of type T
   * 
   * Example: post<AiResponse>('ai/ask', { Prompt: 'status' })
   * Makes request to: http://localhost:5259/api/ai/ask
   */
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
  }
}
