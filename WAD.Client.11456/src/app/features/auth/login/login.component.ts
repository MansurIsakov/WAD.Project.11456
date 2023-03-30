import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    email: '',
    name: '',
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    localStorage.setItem('user', JSON.stringify(this.user));

    this.router.navigate(['/']);
    location.reload();
  }
}
