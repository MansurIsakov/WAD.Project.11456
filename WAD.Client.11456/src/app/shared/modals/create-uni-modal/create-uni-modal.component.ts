import { Component, EventEmitter, Output } from '@angular/core';
import { IUniversity } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/features/university/university.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-uni-modal',
  templateUrl: './create-uni-modal.component.html',
  styleUrls: ['./create-uni-modal.component.scss'],
})
export class CreateUniModalComponent {
  @Output() modalClosed = new EventEmitter<void>();
  university: IUniversity = {
    name: '',
    shortName: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi vitae hic, earum consequuntur eum voluptates explicabo quisquam laudantium cupiditate saepe ea, quibusdam delectus aspernatur reiciendis exercitationem! Quis earum, iusto doloremque laborum ex necessitatibus, cumque doloribus natus eos sit minima in molestias ducimus dolorem recusandae, eveniet iure fugit fugiat eius! Ullam, illo dolor mollitia tenetur culpa vel eum dolorem, ratione voluptates perspiciatis eius quis magnam! Voluptate hic velit libero quos ducimus labore ratione. At dignissimos repellendus excepturi sapiente temporibus dolore laboriosam laborum, eius nulla voluptatibus! Omnis temporibus aliquid voluptates, tenetur distinctio neque. Illum expedita praesentium commodi dicta velit labore eos!',
    courses: '',
    rating: 5.0,
    admission: '',
    scolarship: 0,
    tuitionFee: 0,
    establishedIn: 2002,
    image: '',
    location: '',
  };

  constructor(private universityService: UniversityService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.universityService.createUniversity(this.university).subscribe(
      resData => {
        this.modalClosed.emit();
        location.reload();
      },
      (errorMessage: any) => {
        console.error(errorMessage);
      }
    );
  }
}
