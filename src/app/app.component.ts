import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextinputComponent } from './textinput/textinput.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextinputComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interface-tt';
  inputText: string = ''; // Propiedad para almacenar el texto ingresado

  // Este método será llamado cada vez que cambie el texto
  onTextChange(text: string): void {
    this.inputText = text;
    console.log('Texto ingresado: ', this.inputText);
  }

  // Método para manejar el clic en el botón "Analizar"
  onAnalyze(): void {
    if (this.inputText) {
      console.log('Texto para analizar:', this.inputText);
    }
  }
}
