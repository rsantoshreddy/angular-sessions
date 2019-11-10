import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent {
  @Input('serverElement') element: { name: string; type: string; content: string };
}
