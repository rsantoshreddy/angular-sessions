import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  serverElements: any[] = [];

  onServerCreated(serverData) {
    this.serverElements.push({
      name: serverData.name,
      type: serverData.type,
      content: serverData.content
    });
  }
  onBlueprintCreated(serverData) {
    this.serverElements.push({
      name: serverData.name,
      type: serverData.type,
      content: serverData.content
    });
  }
}
