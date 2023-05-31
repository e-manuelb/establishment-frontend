import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRegistrationDialogComponent } from './delete-registration-dialog.component';

describe('DeleteRegistrationDialogComponent', () => {
  let component: DeleteRegistrationDialogComponent;
  let fixture: ComponentFixture<DeleteRegistrationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteRegistrationDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteRegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
