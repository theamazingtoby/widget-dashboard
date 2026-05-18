import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPreferences } from '../models/preferences.model';

@Injectable({ providedIn: 'root' })
export class PreferencesService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/preferences/1';

  readonly preferences = signal<UserPreferences | null>(null);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  load() {
    this.http.get<UserPreferences>(this.apiUrl).subscribe({
      next: (prefs) => {
        this.preferences.set(prefs);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not connect to the backend. Start json-server with: npm run server');
        this.loading.set(false);
      },
    });
  }

  save(prefs: UserPreferences) {
    this.preferences.set(prefs);
    this.http.put<UserPreferences>(this.apiUrl, prefs).subscribe();
  }
}
