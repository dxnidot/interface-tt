import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css'],
})
export class ResultDisplayComponent {
  @Input() analysisResult: string = ''; // Propiedad para recibir el resultado
}
