import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() isTextValid: boolean = false; // Para habilitar/deshabilitar el botón
  @Output() analyze = new EventEmitter<void>(); // Para emitir el evento de análisis

  // Método que se ejecuta cuando se presiona el botón
  onAnalyzeClick(): void {
    this.analyze.emit();
  }
}
