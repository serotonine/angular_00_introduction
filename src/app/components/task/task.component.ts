import { Component, Input, inject } from '@angular/core';
// Interface.
import { type Task } from './task.model';
// Pipe.
import { DatePipe } from '@angular/common';
// Service.
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  private taskService = inject(TasksService);
  @Input({ required: true }) task!: Task;
  // Event handler.
  onDeleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
