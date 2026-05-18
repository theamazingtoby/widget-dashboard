import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasks',
  imports: [FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  tasks = signal<Task[]>([
    { id: 1, text: 'Review dashboard design', completed: true },
    { id: 2, text: 'Set up json-server backend', completed: true },
    { id: 3, text: 'Build widget components', completed: false },
    { id: 4, text: 'Test panel customization', completed: false },
    { id: 5, text: 'Deploy to production', completed: false },
  ]);

  newTask = '';
  private nextId = 6;

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.update((tasks) => [
        ...tasks,
        { id: this.nextId++, text: this.newTask.trim(), completed: false },
      ]);
      this.newTask = '';
    }
  }

  toggleTask(id: number) {
    this.tasks.update((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  removeTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }
}
