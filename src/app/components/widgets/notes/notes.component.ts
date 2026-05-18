import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  notes = signal('');

  get charCount() {
    return this.notes().length;
  }

  onInput(event: Event) {
    this.notes.set((event.target as HTMLTextAreaElement).value);
  }
}
