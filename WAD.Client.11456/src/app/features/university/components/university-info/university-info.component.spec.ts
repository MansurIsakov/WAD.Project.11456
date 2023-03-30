import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInfoComponent } from './university-info.component';

describe('UniversityInfoComponent', () => {
  let component: UniversityInfoComponent;
  let fixture: ComponentFixture<UniversityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
