import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss'
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: string | number | null = '';
  @Input() trend: number = 0; // Positive for up, negative for down
  @Input() icon: string = ''; // Placeholder for now, could be SVG path
  @Input() glowColor: string = 'var(--primary-glow)';

  get trendColor(): string {
    return this.trend > 0 ? 'var(--success-glow)' : (this.trend < 0 ? 'var(--danger-glow)' : 'var(--text-muted)');
  }
}
