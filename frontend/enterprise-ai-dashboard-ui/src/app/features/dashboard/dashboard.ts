import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService, DashboardData } from '../../core/services/dashboard.service';
import { StatCardComponent } from './components/stat-card/stat-card';
import { AiAssistantComponent } from '../ai-assistant/ai-assistant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatCardComponent, AiAssistantComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {
  dashboardData$: Observable<DashboardData> | undefined;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardData$ = this.dashboardService.getDashboardData();
  }
}
