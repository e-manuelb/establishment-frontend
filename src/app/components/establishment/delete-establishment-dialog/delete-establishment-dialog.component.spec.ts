import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEstablishmentDialogComponent } from './delete-establishment-dialog.component';

describe('DeleteEstablishmentDialogComponent', () => {
  let component: DeleteEstablishmentDialogComponent;
  let fixture: ComponentFixture<DeleteEstablishmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEstablishmentDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteEstablishmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
