import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogModalComponent } from './edit-blog-modal.component';

describe('EditBlogModalComponent', () => {
  let component: EditBlogModalComponent;
  let fixture: ComponentFixture<EditBlogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlogModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
