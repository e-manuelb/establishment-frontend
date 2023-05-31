import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistrationsComponent } from './list-registrations.component';

describe('ListRegistrationsComponent', () => {
  let component: ListRegistrationsComponent;
  let fixture: ComponentFixture<ListRegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRegistrationsComponent]
    });
    fixture = TestBed.createComponent(ListRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
