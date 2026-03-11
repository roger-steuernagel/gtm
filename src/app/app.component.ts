import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular + TypeScript migration complete';

  tasks: Task[] = [
    { id: 1, title: 'Replace .js files with .ts', completed: true },
    { id: 2, title: 'Add static types and interfaces', completed: true },
    { id: 3, title: 'Keep Angular component architecture', completed: true }
  ];

  get completedCount(): number {
    return this.tasks.filter((task: Task) => task.completed).length;
  }

  toggleTask(id: number): void {
    this.tasks = this.tasks.map((task: Task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });
  }
}
