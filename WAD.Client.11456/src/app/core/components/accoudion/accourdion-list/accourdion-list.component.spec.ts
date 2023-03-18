import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccourdionListComponent } from './accourdion-list.component';

describe('AccourdionListComponent', () => {
  let component: AccourdionListComponent;
  let fixture: ComponentFixture<AccourdionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccourdionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccourdionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
