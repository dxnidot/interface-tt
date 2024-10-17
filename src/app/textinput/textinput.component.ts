import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textinput',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'], // Asegúrate de que es `styleUrls` y no `styleUrl`
})
export class TextinputComponent {
  inputForm: FormGroup;

  // EventEmitter para emitir el valor cuando el texto cambie
  @Output() textChange = new EventEmitter<string>();

  constructor() {
    this.inputForm = new FormGroup({
      textInput: new FormControl(''),
    });

    // Suscribirse a los cambios del textarea y emitirlos
    this.inputForm.get('textInput')?.valueChanges.subscribe((value) => {
      this.textChange.emit(value);
    });
  }

  // Método para limpiar el valor del campo de texto
  clearInput(): void {
    this.inputForm.get('textInput')?.setValue('');
  }
}
