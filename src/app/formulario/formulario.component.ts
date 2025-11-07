import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  
  titulo: string = 'Formulario de Contacto';

  constructor() { }
  enviarFormulario(nombre: string, email: string, mensaje: string) {
  // Muestra los datos en la consola (simulación de envío)
  console.log('Nombre:', nombre);
  console.log('Correo electrónico:', email);
  console.log('Mensaje:', mensaje);
  // Lógica para enviar los datos a un servidor o servicio
  alert('Formulario enviado con éxito');
  }
}