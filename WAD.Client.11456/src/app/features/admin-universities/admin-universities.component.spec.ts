import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniversitiesComponent } from './admin-universities.component';

describe('AdminUniversitiesComponent', () => {
  let component: AdminUniversitiesComponent;
  let fixture: ComponentFixture<AdminUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUniversitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
