import { Component, signal } from '@angular/core';
// Data
import { DUMMY_USERS } from '../../data/dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 
  // So called getter.
  get randUser(){return Math.floor(Math.random() * DUMMY_USERS.length)};
  get imgUrl(){
    return `./assets/users/${this.selectedUser.avatar}`;
  }
  selectedUser = signal(DUMMY_USERS[this.randUser]) ;

  // Event handlers.
  onSelectUser(){
    this.selectedUser.set(DUMMY_USERS[this.randUser]);
  }
}
