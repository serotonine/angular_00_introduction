import { Injectable } from '@angular/core';
// Interfaces.
import { type Task } from '../task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  
  // Data
  private _tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  constructor(){
    const tasks = localStorage.getItem('tasks');
    if(tasks){
        this._tasks = JSON.parse(tasks);
    }
    else{
      localStorage.setItem('tasks', JSON.stringify(this._tasks));
    }
  }
  private _saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  getSelectedUserTasks(userId: string) {
    return this._tasks.filter((task) => task.userId === userId);
  }
  deleteTask(id: string) {
    const tempTasks = this._tasks.filter((task) => task.id !== id);
    this._tasks = tempTasks;
    this._saveTasks();
  }
  addTask(task: Task) {
    this._tasks.unshift(task);
    this._saveTasks();
  }
}
