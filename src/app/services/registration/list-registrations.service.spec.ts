import { TestBed } from '@angular/core/testing';

import { ListRegistrationsService } from './list-registrations.service';

describe('ListRegistrationsService', () => {
  let service: ListRegistrationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRegistrationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
