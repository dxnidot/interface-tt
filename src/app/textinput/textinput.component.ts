import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-textinput',
  standalone: true,
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'],
})
export class TextinputComponent {
  inputText: string = '';

  @Output() textChange = new EventEmitter<string>();

  onTextChange(): void {
    this.textChange.emit(this.inputText); // Emitir el texto al componente padre
  }
}
