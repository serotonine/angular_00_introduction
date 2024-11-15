import { Component, Input, inject } from '@angular/core';
// Components.
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
// Service.
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  // ? => this value might be undefined.
  @Input() name?: string;
  @Input({ required: true }) userId!: string;
  // Alternative.
  /* @Input() name:string | undefined; */

  // Getters.
  get selectedUserTasks() {
    return this.tasksService.getSelectedUserTasks(this.userId);
  }
  // Handlers.
  onDeleteTaskHandler(id: string) {
    this.tasksService.deleteTask(id);
  }
  isAddTask = false;
  toggleIsAddTask() {
    this.isAddTask = !this.isAddTask;
  }
}
