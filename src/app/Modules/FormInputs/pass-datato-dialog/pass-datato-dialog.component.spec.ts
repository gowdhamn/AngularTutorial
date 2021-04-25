import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDatatoDialogComponent } from './pass-datato-dialog.component';

describe('PassDatatoDialogComponent', () => {
  let component: PassDatatoDialogComponent;
  let fixture: ComponentFixture<PassDatatoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassDatatoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassDatatoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
