import { Component } from '@angular/core';
// Components
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a-00-install';
}
