import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostexampleComponent } from './postexample.component';

describe('PostexampleComponent', () => {
  let component: PostexampleComponent;
  let fixture: ComponentFixture<PostexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
