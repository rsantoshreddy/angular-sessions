import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import UserService from '../services/user.service';
import LoggerService from '../services/logger.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: []
})
export class UserComponent implements OnInit {
  @Input() user: { name: string; age: number; status: string };
  @Input() id: number;
  constructor(private userService: UserService) {}
  ngOnInit() {}
  setStatus(status: { id: number; status: string }) {
    this.userService.updateUser(status);
    this.userService.userStatusUpdated.emit(status);
  }
}
