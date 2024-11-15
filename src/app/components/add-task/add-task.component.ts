import { Component, Input, Output, EventEmitter, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Interface
import { type Task } from '../task/task.model';
// Service.
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  private tasksService = inject(TasksService);
  @Input({required:true}) userId!:string;
  enteredTitle = "";
  /* enteredTitle = signal(""); */
  enteredSummary = "";
  /* enteredTitle = signal(""); */
  enteredDueDate = "";
  /* enteredTitle = signal(""); */

  // Event Handler.
  @Output() closeDialog = new EventEmitter<void>();
  onCloseDialog() {
    this.closeDialog.emit();
  }
  @Output() submitted = new EventEmitter<Task>();
  onSubmit(){
    const newTask = {
      id:`t${new Date().getTime().toString()}`,
      userId:this.userId,
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDueDate,
    }
    this.tasksService.addTask(newTask);
    this.submitted.emit(newTask);
    this.closeDialog.emit();
  }
}
