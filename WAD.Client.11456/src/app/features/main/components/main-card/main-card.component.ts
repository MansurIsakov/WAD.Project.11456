import { Component, Input } from '@angular/core';
import { CardType } from '../../main.component';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent {
  @Input() card!: CardType;
}
