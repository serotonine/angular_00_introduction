import { Component, Input, Output , EventEmitter} from '@angular/core';
// Interface.
import { type Task } from './task.model';
// Pipe.
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!:Task;
  // Could be selectedTask = output<string>();
  @Output() selectedTask = new EventEmitter<string>();
  // Event handler.
  onDeleteTask(){
    this.selectedTask.emit(this.task.id);
  }
}
