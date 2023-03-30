import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccourdionItemComponent } from './accourdion-item.component';

describe('AccourdionItemComponent', () => {
  let component: AccourdionItemComponent;
  let fixture: ComponentFixture<AccourdionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccourdionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccourdionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
