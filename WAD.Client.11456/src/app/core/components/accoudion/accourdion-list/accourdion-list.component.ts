import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accourdion-list',
  templateUrl: './accourdion-list.component.html',
  styleUrls: ['./accourdion-list.component.scss'],
})
export class AccourdionListComponent {
  @Input() accordionList!: { title: string; content: string }[];
}
