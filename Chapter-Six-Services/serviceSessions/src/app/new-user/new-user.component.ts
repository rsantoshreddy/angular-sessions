import { Component, OnInit } from '@angular/core';
import UserService from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.userStatusUpdated.subscribe(status => {
      console.log(status);
    });
  }

  onUserAdded(name, age, status) {
    this.userService.addUser({ name, age, status });
  }
}
