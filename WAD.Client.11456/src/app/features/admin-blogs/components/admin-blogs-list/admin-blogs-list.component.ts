import { Component, Input, Output } from '@angular/core';
import { IBlog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-admin-blogs-list',
  templateUrl: './admin-blogs-list.component.html',
  styleUrls: ['./admin-blogs-list.component.scss'],
})
export class AdminBlogsListComponent {
  @Input() blogs!: IBlog[] | null;
  @Output() blog!: IBlog | null;
  isCreateModalOpen: boolean = false;
  isEditModalOpen: boolean = false;

  onEdit($event: IBlog) {
    this.blog = $event;
    this.isEditModalOpen = true;
  }

  onCreateModalToggle() {
    this.isCreateModalOpen = !this.isCreateModalOpen;
  }

  onEditModalToggle() {
    this.isEditModalOpen = !this.isEditModalOpen;
  }
}
