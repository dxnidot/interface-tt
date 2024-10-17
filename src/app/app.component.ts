import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextinputComponent } from './textinput/textinput.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextinputComponent],
  templateUrl: './app.component.html' ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interface-tt';

  onTextChange(text: string): void {
    console.log('Texto ingresado: ', text);
  }
}
