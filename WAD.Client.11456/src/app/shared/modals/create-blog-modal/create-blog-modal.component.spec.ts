import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogModalComponent } from './create-blog-modal.component';

describe('CreateBlogModalComponent', () => {
  let component: CreateBlogModalComponent;
  let fixture: ComponentFixture<CreateBlogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlogModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBlogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
