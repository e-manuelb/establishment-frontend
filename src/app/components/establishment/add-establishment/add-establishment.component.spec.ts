import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstablishmentComponent } from './add-establishment.component';

describe('AddEstablishmentComponent', () => {
  let component: AddEstablishmentComponent;
  let fixture: ComponentFixture<AddEstablishmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEstablishmentComponent]
    });
    fixture = TestBed.createComponent(AddEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
