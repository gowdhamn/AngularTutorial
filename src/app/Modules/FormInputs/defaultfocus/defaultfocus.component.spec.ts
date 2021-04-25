import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultfocusComponent } from './defaultfocus.component';

describe('DefaultfocusComponent', () => {
  let component: DefaultfocusComponent;
  let fixture: ComponentFixture<DefaultfocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultfocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultfocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
