import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private loginService: LoginService) {

  }
  title = 'GHS';

  loggedInUser = true;

  loggedIn() : boolean {
    return this.loggedInUser;
  }
}
