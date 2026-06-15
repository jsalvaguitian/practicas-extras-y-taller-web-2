import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',//asi se llama su selector que lo identifica cuando lo usamos en el index.html
  imports: [RouterOutlet],
  templateUrl: './app.html',//este component typescript esta anidado al html
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase1');
   
  //Declaracion de variables
  dadoIzquierdo : string = "dados/dice1.png";
  dadoDerecho : string = "dados/dice4.png";

  nro1:number = 1;
  nro2:number = 2;

  resultado = "";

  lanzarDados(){
    this.nro1 = Math.floor(Math.random()*5)+1;
    this.nro2 = Math.floor(Math.random()*5)+1;

    //console.log(this.nro1);
    //console.log(this.nro2);

    this.dadoIzquierdo = 'dados/dice'+ this.nro1 + ".png";
    this.dadoDerecho = 'dados/dice' + this.nro2 + ".png";


    if(this.nro1 == this.nro2){
      this.resultado = "Ganaste :-)";
    
    }else{
      this.resultado =  "Perdiste :-( sera para la proxima";
    }

    console.log(this.resultado);
  }


}
