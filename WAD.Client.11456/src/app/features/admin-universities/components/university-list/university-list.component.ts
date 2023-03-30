import { Component, Input, Output } from '@angular/core';
import { IUniversity } from 'src/app/models/university.model';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss'],
})
export class UniversityListComponent {
  @Input() universities!: IUniversity[] | null;
  @Output() university!: IUniversity | null;
  isCreateModalOpen: boolean = false;
  isEditModalOpen: boolean = false;

  onEdit($event: IUniversity) {
    this.university = $event;
    this.isEditModalOpen = true;
  }

  onCreateModalToggle() {
    this.isCreateModalOpen = !this.isCreateModalOpen;
  }

  onEditModalToggle() {
    this.isEditModalOpen = !this.isEditModalOpen;
  }
}
