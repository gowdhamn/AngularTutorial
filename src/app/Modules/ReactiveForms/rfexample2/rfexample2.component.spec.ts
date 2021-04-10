import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rfexample2Component } from './rfexample2.component';

describe('Rfexample2Component', () => {
  let component: Rfexample2Component;
  let fixture: ComponentFixture<Rfexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rfexample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rfexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
