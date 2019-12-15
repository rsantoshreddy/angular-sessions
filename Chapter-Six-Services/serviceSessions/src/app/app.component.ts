import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceSessions';
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
  onUserAdded(account: { name: string; age: number; status: string }) {
    this.users.unshift({ ...account });
  }
  onUserStatusUpdate(updateInfo: { id: number; status: string }) {
    this.users[updateInfo.id].status = updateInfo.status;
  }
}
