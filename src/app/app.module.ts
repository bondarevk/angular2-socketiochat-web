// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Services
import { SocketService } from './shared/services/socket.service';
import { UserService } from "./shared/services/user.service";

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
