import { Component } from '@angular/core';
// Before Angular 17.
import { NgFor, NgIf } from '@angular/common';
// Data
import { DUMMY_USERS } from './data/dummy-users';
// Components
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TasksComponent, NgFor, NgIf ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a-00-install';
  users = DUMMY_USERS;
  selectedId!:string;
  selectedUserId?:string;
  get selectedUser(){
    return this.users.find((user) => this.selectedUserId === user.id)!;

  }
  // onSelectUser event.
  selectUserHandler(id:string){
   this.selectedUserId = id;
  }
}
