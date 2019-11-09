import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  status = 'offline';
  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}
