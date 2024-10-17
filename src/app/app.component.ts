import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextinputComponent } from './textinput/textinput.component';
import { ButtonComponent } from './button/button.component';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TextinputComponent,
    ButtonComponent,
    ResultDisplayComponent,
    SentimentAnalysisComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interface-tt';
  inputText: string = ''; // Propiedad para almacenar el texto ingresado
  analysisResult: string = '';

  // Método para manejar el cambio de texto en el TextInputComponent
  onTextChange(text: string): void {
    this.inputText = text;
    console.log('Texto ingresado: ', this.inputText);
  }

  // Método para manejar el clic en el botón "Analizar"
  onAnalyze(): void {
    if (this.inputText) {
      console.log('Texto para analizar:', this.inputText);

      // Instanciar el SentimentAnalysisComponent y llamar a su método
      const sentimentAnalysisComponent = new SentimentAnalysisComponent();
      sentimentAnalysisComponent.text = this.inputText;
      sentimentAnalysisComponent.analyzeText(); // Llamar a este método para analizar el texto
      this.analysisResult = sentimentAnalysisComponent.analysisResult; // Guardar el resultado en analysisResult
    }
  }
}
