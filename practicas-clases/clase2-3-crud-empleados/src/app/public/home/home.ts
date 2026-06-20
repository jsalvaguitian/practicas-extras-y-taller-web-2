import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [ButtonModule], //se importa la lib de primeng, en cada componente se la importa para usarla
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
