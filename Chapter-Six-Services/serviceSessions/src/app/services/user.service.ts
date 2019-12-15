import LoggerService from './logger.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export default class UserService {
  users = [
    {
      name: 'Santosh',
      age: 30,
      status: 'pass'
    },
    {
      name: 'Pavan',
      age: 30,
      status: 'pass'
    },
    {
      name: 'Himanshu',
      age: 30,
      status: 'pass'
    }
  ];
  constructor(private logService: LoggerService) {}

  userStatusUpdated = new EventEmitter<any>();

  addUser(account: { name: string; age: number; status: string }) {
    this.users.unshift({ ...account });
  }
  updateUser(updateInfo: { id: number; status: string }) {
    this.users[updateInfo.id].status = updateInfo.status;
    this.logService.logStatus(updateInfo.status);
  }
}
