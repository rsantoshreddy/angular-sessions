import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.less']
})
export class HeaderFormComponent {
  serverName: string;
  serverContent: string;

  @Output('srvOut') serverElementAdded = new EventEmitter();
  @Output('bprtOut') blueprintAdded = new EventEmitter();

  addServer() {
    this.serverElementAdded.emit({ name: this.serverName, content: this.serverContent, type: 'server' });
  }
  addBluePrint() {
    this.blueprintAdded.emit({ name: this.serverName, content: this.serverContent, type: 'blueprint' });
  }
}
