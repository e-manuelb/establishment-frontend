import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegistrationDialogComponent } from './add-registration-dialog.component';

describe('AddRegistrationDialogComponent', () => {
  let component: AddRegistrationDialogComponent;
  let fixture: ComponentFixture<AddRegistrationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRegistrationDialogComponent]
    });
    fixture = TestBed.createComponent(AddRegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
