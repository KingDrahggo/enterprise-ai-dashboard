import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  template: `
    <div style="padding: 2rem; color: white;">
        <h2 style="color: var(--primary-glow); margin-bottom: 1.5rem;">ANALYTICS ENGINE</h2>
        <div class="chart-container" style="display: flex; align-items: flex-end; gap: 20px; height: 300px; border-left: 1px solid #333; border-bottom: 1px solid #333; padding: 20px;">
            <div style="height: 40%; width: 40px; background: var(--primary-glow); box-shadow: 0 0 10px var(--primary-glow); transition: height 0.3s;"></div>
            <div style="height: 70%; width: 40px; background: var(--accent-glow); box-shadow: 0 0 10px var(--accent-glow); transition: height 0.3s;"></div>
            <div style="height: 55%; width: 40px; background: var(--primary-glow); box-shadow: 0 0 10px var(--primary-glow); transition: height 0.3s;"></div>
            <div style="height: 90%; width: 40px; background: var(--accent-glow); box-shadow: 0 0 10px var(--accent-glow); transition: height 0.3s;"></div>
            <div style="height: 65%; width: 40px; background: var(--primary-glow); box-shadow: 0 0 10px var(--primary-glow); transition: height 0.3s;"></div>
            <div style="height: 80%; width: 40px; background: var(--accent-glow); box-shadow: 0 0 10px var(--accent-glow); transition: height 0.3s;"></div>
        </div>
        <p style="margin-top: 1rem; color: #888;">System Performance Metrics (Last 6 Hours)</p>
    </div>
  `
})
export class AnalyticsComponent {}
