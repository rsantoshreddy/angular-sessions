import { Component, OnInit } from '@angular/core';
import LoggerService from './services/logger.service';
import UserService from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.users = this.userService.users;
  }
  users = [];
}
