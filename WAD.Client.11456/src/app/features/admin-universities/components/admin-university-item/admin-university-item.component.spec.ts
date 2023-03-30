import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniversityItemComponent } from './admin-university-item.component';

describe('AdminUniversityItemComponent', () => {
  let component: AdminUniversityItemComponent;
  let fixture: ComponentFixture<AdminUniversityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUniversityItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUniversityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
