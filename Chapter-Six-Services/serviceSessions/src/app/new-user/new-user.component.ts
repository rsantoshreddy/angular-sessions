import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter<{ name: string; age: number; status: string }>();
  constructor() {}

  ngOnInit() {}

  onUserAdded(name, age, status) {
    this.userAdded.emit({ name, age, status });
  }
}
