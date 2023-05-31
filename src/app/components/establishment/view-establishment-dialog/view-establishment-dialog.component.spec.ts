import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstablishmentDialogComponent } from './view-establishment-dialog.component';

describe('ViewEstablishmentDialogComponent', () => {
  let component: ViewEstablishmentDialogComponent;
  let fixture: ComponentFixture<ViewEstablishmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEstablishmentDialogComponent]
    });
    fixture = TestBed.createComponent(ViewEstablishmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
