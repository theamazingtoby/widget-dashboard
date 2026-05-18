export type WidgetType = 'clock' | 'weather' | 'notes' | 'tasks' | 'stats' | 'calendar';
export type Theme = 'light' | 'dark';

export interface PanelConfig {
  id: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  widget: WidgetType;
}

export interface UserPreferences {
  id: string | number;
  panels: PanelConfig[];
  theme: Theme;
}

export const WIDGET_OPTIONS: { type: WidgetType; name: string; icon: string }[] = [
  { type: 'clock',    name: 'Clock',        icon: '🕐' },
  { type: 'weather',  name: 'Weather',      icon: '⛅' },
  { type: 'notes',    name: 'Notes',        icon: '📝' },
  { type: 'tasks',    name: 'Task List',    icon: '✅' },
  { type: 'stats',    name: 'System Stats', icon: '📊' },
  { type: 'calendar', name: 'Calendar',     icon: '📅' },
];
