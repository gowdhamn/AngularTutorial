import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateexampleComponent } from './updateexample.component';

describe('UpdateexampleComponent', () => {
  let component: UpdateexampleComponent;
  let fixture: ComponentFixture<UpdateexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
