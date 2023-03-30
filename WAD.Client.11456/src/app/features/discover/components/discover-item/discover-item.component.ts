import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discover-item',
  templateUrl: './discover-item.component.html',
  styleUrls: ['./discover-item.component.scss'],
})
export class DiscoverItemComponent {
  @Input() university: any;
}
