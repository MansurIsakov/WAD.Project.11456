import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-discover-search',
  templateUrl: './discover-search.component.html',
  styleUrls: ['./discover-search.component.scss'],
})
export class DiscoverSearchComponent {
  @Output() onSearch = new EventEmitter<string>();

  searchValue = '';

  onSearchChange() {
    this.onSearch.emit(this.searchValue);
  }

  setDefault() {
    this.searchValue = 'WIUT';
    this.onSearch.emit(this.searchValue);
  }
}
