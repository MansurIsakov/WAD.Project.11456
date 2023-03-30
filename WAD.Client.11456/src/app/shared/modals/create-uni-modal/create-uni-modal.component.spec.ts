import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUniModalComponent } from './create-uni-modal.component';

describe('CreateUniModalComponent', () => {
  let component: CreateUniModalComponent;
  let fixture: ComponentFixture<CreateUniModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUniModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUniModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
