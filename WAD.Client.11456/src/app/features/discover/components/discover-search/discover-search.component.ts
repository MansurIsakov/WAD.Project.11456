import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-discover-search',
  templateUrl: './discover-search.component.html',
  styleUrls: ['./discover-search.component.scss'],
})
export class DiscoverSearchComponent {
  searchValue = '';

  setDefault() {
    this.searchValue = 'WIUT';
  }
}
