import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: { name: string; age: number; status: string };
  @Input() id: number;
  @Output() statusUpdated = new EventEmitter<{ id: number; status: string }>();
  constructor() {}
  ngOnInit() {}
  setStatus(status: { id: number; status: string }) {
    this.statusUpdated.emit({ ...status });
  }
}
