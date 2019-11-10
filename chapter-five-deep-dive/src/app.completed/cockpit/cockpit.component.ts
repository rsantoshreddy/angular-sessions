import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.less']
})
export class CockpitComponent {
  serverName: string;
  serverContent: string;

  @Output() serverCreated = new EventEmitter<{ name: string; content: string; type: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string; content: string; type: string }>();

  addServer() {
    this.serverCreated.emit({
      name: this.serverName,
      type: 'server',
      content: this.serverContent
    });
  }
  addBluePrint() {
    this.blueprintCreated.emit({
      name: this.serverName,
      type: 'blueprint',
      content: this.serverContent
    });
  }
}
