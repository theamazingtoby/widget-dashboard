import { Component, inject } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';
import { UserPreferences, WidgetType } from '../../models/preferences.model';
import { PanelComponent } from '../panel/panel.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard',
  imports: [PanelComponent, MatProgressSpinnerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private prefsService = inject(PreferencesService);

  preferences = this.prefsService.preferences;
  loading = this.prefsService.loading;
  error = this.prefsService.error;

  onWidgetChange(event: { panelId: string; widget: WidgetType }) {
    const prefs = this.preferences();
    if (!prefs) return;

    const updated: UserPreferences = {
      ...prefs,
      panels: prefs.panels.map((p) =>
        p.id === event.panelId ? { ...p, widget: event.widget } : p
      ),
    };

    this.prefsService.save(updated);
  }
}
