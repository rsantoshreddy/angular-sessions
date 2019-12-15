import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import UserService from './services/user.service';
import LoggerService from './services/logger.service';

@NgModule({
  declarations: [AppComponent, UserComponent, NewUserComponent],
  imports: [BrowserModule],
  providers: [UserService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
