import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  userName = '';

  ngOnInit(): void {
    this.isLogged = !!localStorage.getItem('user');
    this.userName = JSON.parse(localStorage.getItem('user') || '{}').name;
  }

  onLogout() {
    localStorage.removeItem('user');
    location.reload();
  }
}
