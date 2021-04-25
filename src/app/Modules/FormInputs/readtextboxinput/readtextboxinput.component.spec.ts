import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadtextboxinputComponent } from './readtextboxinput.component';

describe('ReadtextboxinputComponent', () => {
  let component: ReadtextboxinputComponent;
  let fixture: ComponentFixture<ReadtextboxinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadtextboxinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadtextboxinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
