import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
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
