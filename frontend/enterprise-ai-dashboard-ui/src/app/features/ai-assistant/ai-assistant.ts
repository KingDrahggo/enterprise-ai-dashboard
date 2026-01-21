import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService, AiResponse } from '../../core/services/dashboard.service';

/**
 * AI Assistant Component
 * 
 * Provides a chat interface for AI-powered insights
 * 
 * Key Features:
 * - Real-time chat UI with message history
 * - Loading states during AI processing
 * - Error handling with user-friendly messages
 * 
 * Design Decisions:
 * - Uses ChangeDetectorRef to force UI updates after async operations
 * - Stores messages in component state (could be moved to service for persistence)
 * - Two-way binding with [(ngModel)] for input field
 */
@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-assistant.html',
  styleUrl: './ai-assistant.scss'
})
export class AiAssistantComponent {
  // User input bound to text field
  prompt: string = '';
  
  // Chat message history
  // Each message has text, sender type, and timestamp
  messages: { text: string, sender: 'user' | 'ai', time: Date }[] = [
    { 
      text: 'Hello! I am your Enterprise AI Insight Assistant. How can I help you optimize your operations today?', 
      sender: 'ai', 
      time: new Date() 
    }
  ];
  
  // Loading state - shows "..." indicator while waiting for AI response
  loading: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    // ChangeDetectorRef forces Angular to check for changes
    // Needed because async operations don't always trigger change detection
    private cdr: ChangeDetectorRef
  ) {}

  /**
   * Send message to AI and handle response
   * Called when user clicks SEND or presses Enter
   */
  askAi() {
    // Validation: Don't send empty messages
    if (!this.prompt.trim()) return;

    // Add user message to chat immediately
    // This provides instant feedback to the user
    this.messages.push({ 
      text: this.prompt, 
      sender: 'user', 
      time: new Date() 
    });
    
    // Store prompt before clearing input
    const currentPrompt = this.prompt;
    this.prompt = '';  // Clear input field
    this.loading = true;  // Show loading indicator

    // Call AI service
    // Uses RxJS Observable pattern for async handling
    this.dashboardService.askAi(currentPrompt).subscribe({
      // Success handler
      next: (res: AiResponse) => {
        console.log('AI Response received:', res);
        console.log('Messages before push:', this.messages.length);
        
        // Add AI response to chat
        this.messages.push({ 
          text: res.response, 
          sender: 'ai', 
          time: new Date(res.processedAt) 
        });
        
        console.log('Messages after push:', this.messages.length);
        this.loading = false;  // Hide loading indicator
        
        // CRITICAL: Force change detection
        // Without this, the UI may not update immediately
        this.cdr.detectChanges();
      },
      // Error handler
      error: (err) => {
        console.error('AI Error:', err);
        
        // Show user-friendly error message
        this.messages.push({ 
          text: 'Error connecting to AI Core. Please ensure the backend is running.', 
          sender: 'ai', 
          time: new Date() 
        });
        
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
