import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sentiment-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent {
  @Input() text: string = ''; // Texto que llega del componente padre
  isLoading = false; // Estado para mostrar si el análisis está en progreso
  analysisResult: string = ''; // Resultado simulado del análisis

  constructor() {}

  // Método para realizar el análisis de prueba
  analyzeText(): void {
    if (!this.text) return;

    this.isLoading = true;
    console.log('Texto a analizar:', this.text);

    // Simulamos un análisis con un pequeño retraso
    setTimeout(() => {
      // Aquí puedes simular el resultado del análisis
      this.analysisResult = this.simulateSentimentAnalysis(this.text);
      this.isLoading = false;
    }, 2000); // Simulación de un retraso de 2 segundos para el análisis
  }

  // Método que simula el resultado del análisis de sentimientos
  simulateSentimentAnalysis(text: string): string {
    // Simulación: Devuelve un resultado basado en el contenido del texto
    if (text.includes('bueno') || text.includes('feliz')) {
      return 'Positivo';
    } else if (text.includes('malo') || text.includes('triste')) {
      return 'Negativo';
    } else {
      return 'Neutral';
    }
  }
}
