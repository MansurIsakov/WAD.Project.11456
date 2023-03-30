import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUniModalComponent } from './edit-uni-modal.component';

describe('EditUniModalComponent', () => {
  let component: EditUniModalComponent;
  let fixture: ComponentFixture<EditUniModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUniModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUniModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
