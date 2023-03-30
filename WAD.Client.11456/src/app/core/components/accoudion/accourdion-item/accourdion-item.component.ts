import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accourdion-item',
  templateUrl: './accourdion-item.component.html',
  styleUrls: ['./accourdion-item.component.scss'],
})
export class AccourdionItemComponent {
  @Input() item!: { title: string; content: string };

  isExpanded = false;

  toggleItem() {
    this.isExpanded = !this.isExpanded;
  }
}
