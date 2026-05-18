import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  private today = new Date();
  currentMonth = signal(
    new Date(this.today.getFullYear(), this.today.getMonth(), 1)
  );

  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  monthLabel = computed(() =>
    this.currentMonth().toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })
  );

  days = computed(() => {
    const year = this.currentMonth().getFullYear();
    const month = this.currentMonth().getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  });

  prevMonth() {
    const d = this.currentMonth();
    this.currentMonth.set(new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }

  nextMonth() {
    const d = this.currentMonth();
    this.currentMonth.set(new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  isToday(day: number | null): boolean {
    if (!day) return false;
    const d = this.currentMonth();
    return (
      day === this.today.getDate() &&
      d.getMonth() === this.today.getMonth() &&
      d.getFullYear() === this.today.getFullYear()
    );
  }
}
