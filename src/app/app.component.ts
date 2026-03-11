import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PoButtonModule,
  PoContainerModule,
  PoDividerModule,
  PoListViewModule,
  PoNotificationService,
  PoTagModule,
  PoWidgetModule
} from '@po-ui/ng-components';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PoButtonModule,
    PoContainerModule,
    PoDividerModule,
    PoListViewModule,
    PoTagModule,
    PoWidgetModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashboard de tarefas com PO UI';
  private readonly helloApiUrl = 'http://localhost:8000/api/hello.php';

  tasks: Task[] = [
    { id: 1, title: 'Replace .js files with .ts', completed: true },
    { id: 2, title: 'Add static types and interfaces', completed: true },
    { id: 3, title: 'Keep Angular component architecture', completed: true }
  ];

  constructor(private readonly notification: PoNotificationService) {}

  get completedCount(): number {
    return this.tasks.filter((task: Task) => task.completed).length;
  }

  get pendingCount(): number {
    return this.tasks.length - this.completedCount;
  }

  get progressStatus(): 'success' | 'warning' {
    return this.pendingCount === 0 ? 'success' : 'warning';
  }

  toggleTask(id: number): void {
    this.tasks = this.tasks.map((task: Task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });
  }

  async showHelloWorld(): Promise<void> {
    try {
      const response: Response = await fetch(this.helloApiUrl);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data: { message: string } = (await response.json()) as {
        message: string;
      };

      this.notification.success(data.message);
    } catch (error: unknown) {
      console.error('Failed to call PHP API', error);
      this.notification.error(
        'Unable to reach the PHP API. Start it with: php -S localhost:8000'
      );
    }
  }
}
