import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PanelConfig, WidgetType, WIDGET_OPTIONS } from '../../models/preferences.model';
import { ClockComponent } from '../widgets/clock/clock.component';
import { WeatherComponent } from '../widgets/weather/weather.component';
import { NotesComponent } from '../widgets/notes/notes.component';
import { TasksComponent } from '../widgets/tasks/tasks.component';
import { StatsComponent } from '../widgets/stats/stats.component';
import { CalendarComponent } from '../widgets/calendar/calendar.component';

@Component({
  selector: 'app-panel',
  imports: [
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    ClockComponent,
    WeatherComponent,
    NotesComponent,
    TasksComponent,
    StatsComponent,
    CalendarComponent,
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @Input() config!: PanelConfig;
  @Output() widgetChange = new EventEmitter<{ panelId: string; widget: WidgetType }>();

  widgets = WIDGET_OPTIONS;

  getWidgetName(): string {
    return this.widgets.find((w) => w.type === this.config.widget)?.name ?? '';
  }

  getWidgetIcon(): string {
    return this.widgets.find((w) => w.type === this.config.widget)?.icon ?? '';
  }

  onWidgetChange(widget: WidgetType) {
    this.widgetChange.emit({ panelId: this.config.id, widget });
  }
}
