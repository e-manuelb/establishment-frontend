import { TestBed } from '@angular/core/testing';

import { DeleteRegistrationByIdService } from './delete-registration-by-id.service';

describe('DeleteRegistrationByIdService', () => {
  let service: DeleteRegistrationByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteRegistrationByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
