import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  title = 'You are inside servers component';
  disableServer = true;
  serverCreated = false;
  serverName = '';
  servers = ['', ''];
  constructor() {
    setTimeout(() => {
      this.disableServer = false;
    }, 2000);
  }

  ngOnInit() {}

  onServerCreate(e: any) {
    console.log(e);
    this.serverCreated = true;
  }

  onServerNameChange(e: any) {
    this.serverName = e.target.value;
  }
}
