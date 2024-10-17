import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() analyzeClicked = new EventEmitter<void>(); // Emitir evento al hacer clic

  onAnalyze(): void {
    this.analyzeClicked.emit(); // Emitir evento al hacer clic
  }
}
