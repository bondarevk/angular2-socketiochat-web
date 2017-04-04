import { Component } from '@angular/core';
import {UserService} from "./shared/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';

  constructor(private userService: UserService) {
    console.log(userService);
  }
}
