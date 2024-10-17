import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'],
})
export class TextinputComponent {
  inputText: string = '';

  @Output() textChange = new EventEmitter<string>();

  onTextChange(): void {
    this.textChange.emit(this.inputText); // Emitir el texto al componente padre
  }
    // Método para limpiar el texto
    clearInput(): void {
      this.inputText = ''; // Limpiar el texto
      this.textChange.emit(this.inputText); // Emitir el cambio (texto vacío)
    }
}
