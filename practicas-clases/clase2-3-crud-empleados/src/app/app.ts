import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./public/home/home";
import { Menu } from "./public/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase2-3-crud-empleados');
}
