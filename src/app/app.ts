import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Avatar } from './components/avatar/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Avatar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title= "clase grafica";
  
}
