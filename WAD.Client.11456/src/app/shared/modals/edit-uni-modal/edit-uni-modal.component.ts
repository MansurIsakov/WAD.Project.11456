import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UniversityService } from 'src/app/features/university/university.service';
import { IUniversity } from 'src/app/models/university.model';

@Component({
  selector: 'app-edit-uni-modal',
  templateUrl: './edit-uni-modal.component.html',
  styleUrls: ['./edit-uni-modal.component.scss'],
})
export class EditUniModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();
  @Input() uni!: IUniversity | null;

  university: IUniversity = {
    id: 0,
    name: '',
    shortName: '',
    description: '',
    courses: '',
    rating: 0,
    admission: '',
    scolarship: 0,
    tuitionFee: 0,
    establishedIn: 0,
    image: '',
    location: '',
  };

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.university = {
      id: this.uni?.id ?? 0,
      name: this.uni?.name ?? '',
      shortName: this.uni?.shortName ?? '',
      description: this.uni?.description ?? '',
      courses: this.uni?.courses ?? '',
      rating: this.uni?.rating ?? 0,
      admission: this.uni?.admission ?? '',
      scolarship: this.uni?.scolarship ?? 0,
      tuitionFee: this.uni?.tuitionFee ?? 0,
      establishedIn: this.uni?.establishedIn ?? 0,
      image: this.uni?.image ?? '',
      location: this.uni?.location ?? '',
    };
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.universityService
      // @ts-ignore
      .updateUniversity(this.university)
      .subscribe(resData => {
        this.modalClosed.emit();
        location.reload();
      });
  }

  deleteUni(universityId: number | undefined) {
    if (universityId) {
      this.universityService
        .deleteUniversity(universityId)
        .subscribe(resData => {
          location.reload();
        });
    }
  }
}
