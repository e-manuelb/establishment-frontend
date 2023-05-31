import { TestBed } from '@angular/core/testing';

import { DeleteEstablishmentService } from './delete-establishment.service';

describe('DeleteEstablishmentService', () => {
  let service: DeleteEstablishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteEstablishmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
