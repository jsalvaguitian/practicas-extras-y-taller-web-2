import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  teclado:any[]=[ //no es buena practic usar any
    {
      numeroSonido : 1,
      color : "red"
    },
    {
      numeroSonido : 2,
      color : "burlywood"
    },
    {
      numeroSonido : 3,
      color : "violet"
    },
    {
      numeroSonido : 4,
      color : "pink"
    },
    {
      numeroSonido : 5,
      color : "palevioletred"
    },
    {
      numeroSonido : 6,
      color : "peru"
    },
    {
      numeroSonido : 7,
      color : "rosybrown"
    },
  ];
  protected readonly title = signal('clase-1-app-piano');

  aplicarSonido(tecla:number){
    const audio = new Audio();

    audio.src='sonidos/note'+ tecla +'.mp3';
    audio.volume = 0.2;
    audio.load();
    audio.play();
  }

}
