import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUniversity } from 'src/app/models/university.model';

@Component({
  selector: 'app-admin-university-item',
  templateUrl: './admin-university-item.component.html',
  styleUrls: ['./admin-university-item.component.scss'],
})
export class AdminUniversityItemComponent {
  @Input() university!: IUniversity;
  @Output() edit = new EventEmitter<IUniversity>();
}
