import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rfexmaple1Component } from './rfexmaple1.component';

describe('Rfexmaple1Component', () => {
  let component: Rfexmaple1Component;
  let fixture: ComponentFixture<Rfexmaple1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rfexmaple1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rfexmaple1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
