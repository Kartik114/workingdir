import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {LoginComponent} from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
