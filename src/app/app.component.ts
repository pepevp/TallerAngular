import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TallerAngular';

  nombre : String ="Pepe";
  apellido1 : String="Velazquez";
  apellido2 : String="Perez"
  edad: number=26;
  miHtml : String="<h1>Es un h1</h1>"


  holaPorTerminal(){
    console.log("Hola en el terminal");
  }

}
