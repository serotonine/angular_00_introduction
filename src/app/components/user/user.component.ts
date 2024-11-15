import { Component, Input, input, Output, output, EventEmitter } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // ! => no need to init a value with a value.
  @Input({required:true}) user!:User;
  @Input({required:true}) isSelected!:boolean;
  // Another declaration way with signal.
  /* avatar<string>= input(); || avatar.required<string>(); */

  // So called getter.
 get imgUri(){ return `./assets/users/${this.user.avatar}`; }
 // With signal.
/*  imgUri = computed(() =>`./assets/users/${this.avatar()}` ) */

  // Event handlers.
 // @Output() select = new EventEmitter<string>();
  // Angular 16 new feature.
  select = output<string>();

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
