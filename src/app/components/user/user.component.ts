import { Component, signal, computed } from '@angular/core';
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
  // Signal & computed.
  selectedUser = signal(DUMMY_USERS[this.randUser]) ;
  // Will be recalculated ONLY when the signal value change.
  imgUrl = computed(() => `./assets/users/${this.selectedUser().avatar}`);
  
  // Event handlers.
  onSelectUser(){
    this.selectedUser.set(DUMMY_USERS[this.randUser]);
  }
}
