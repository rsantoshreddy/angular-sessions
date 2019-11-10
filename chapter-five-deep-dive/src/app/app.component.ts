import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name: string = 'Santosh';
  serverElements: any[] = [
    {
      name: 'Test',
      type: 'server',
      content: 'test content'
    }
  ];

  addServer(serverData) {
    console.log(serverData);
    this.serverElements.push({
      name: serverData.name,
      type: serverData.type,
      content: serverData.content
    });
  }
  addBluePrint(serverData) {
    console.log(serverData);
    this.serverElements.push({
      name: serverData.name,
      type: serverData.type,
      content: serverData.content
    });
  }
}
