import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// agregar una cajita de texto para ponerle nomrbre el nombre debe aparecer del mismo color abajo del acatar al poner guardar
//que la carita gire tipo 3d 
@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class Avatar {
colorFondo=signal('blue');
tamano=signal(150);
tieneLentes=signal(false);
tipoExpresion=signal(1);

cambiarTamano(event :Event) {
  const input = event.target as HTMLInputElement;
  this.tamano.set(parseInt(input.value));
}

cambiarColor(event :Event) {
  const input = event.target as HTMLInputElement;
  this.colorFondo.set(input.value);
}

toggleLentes() {
  this.tieneLentes.update(flag=> !flag);

}

setExpresion(tipo: number) {
  this.tipoExpresion.set(tipo);
}

// aqui se maneja mas el DOM para hacer cosas mas interesantes de formadinamica 
}

