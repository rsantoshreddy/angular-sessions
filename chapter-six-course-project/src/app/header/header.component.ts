import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() onFeatureSelect = new EventEmitter<string>();
  onSelect(feature) {
    this.onFeatureSelect.emit(feature);
  }
}
