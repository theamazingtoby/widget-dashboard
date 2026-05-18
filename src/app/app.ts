import { Component, OnInit, inject, computed, effect } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreferencesService } from './services/preferences.service';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private prefsService = inject(PreferencesService);

  isDark = computed(() => this.prefsService.preferences()?.theme === 'dark');

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('dark', this.isDark());
    });
  }

  ngOnInit() {
    this.prefsService.load();
  }

  toggleTheme() {
    const prefs = this.prefsService.preferences();
    if (!prefs) return;
    this.prefsService.save({ ...prefs, theme: this.isDark() ? 'light' : 'dark' });
  }
}
