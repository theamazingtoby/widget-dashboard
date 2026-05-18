import { Component } from '@angular/core';

interface Stat {
  label: string;
  value: number;
  color: string;
}

interface Metric {
  label: string;
  value: string;
}

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  stats: Stat[] = [
    { label: 'CPU Usage',  value: 42, color: '#3949ab' },
    { label: 'Memory',     value: 68, color: '#00897b' },
    { label: 'Network',    value: 23, color: '#f57c00' },
    { label: 'Storage',    value: 81, color: '#c62828' },
  ];

  metrics: Metric[] = [
    { label: 'Uptime',       value: '14d 6h 32m' },
    { label: 'Requests/s',   value: '1,247' },
    { label: 'Active Users', value: '342' },
    { label: 'Errors',       value: '0' },
  ];
}
