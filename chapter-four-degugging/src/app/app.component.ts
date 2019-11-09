import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  servers = [];

  addServer() {
    this.servers.push('New server');
  }

  removeServer(id) {
    this.servers.splice(id, 1);
  }
}
