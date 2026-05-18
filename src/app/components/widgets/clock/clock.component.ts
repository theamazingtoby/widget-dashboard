import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clock',
  imports: [DatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnInit, OnDestroy {
  time = signal(new Date());
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.timer = setInterval(() => this.time.set(new Date()), 1000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}
