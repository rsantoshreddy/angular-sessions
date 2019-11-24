import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'chapter-six-course-project';
  selectedFeature = 'recipe';
  onFeatureSelect(event) {
    this.selectedFeature = event;
  }
}
