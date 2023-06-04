import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User('johnDoe', '123456');

  constructor(private router: Router) {}

  login() {
    console.log('Username:', this.user.login);
    console.log('Password:', this.user.password);

    if (this.user.login === 'johnDoe' && this.user.password === '123456') {
      this.router.navigate(['/project']);
    }
  }
}
