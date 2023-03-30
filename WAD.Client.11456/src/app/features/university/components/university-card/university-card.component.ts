import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.scss'],
})
export class UniversityCardComponent {
  @Input() uniName!: string;
  @Input() uniLocation!: string;
  @Input() uniImage!: string;
  @Input() uniShortName!: string;
}
