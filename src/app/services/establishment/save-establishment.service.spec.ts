import { TestBed } from '@angular/core/testing';

import { SaveEstablishmentService } from './save-establishment.service';

describe('SaveEstablishmentService', () => {
  let service: SaveEstablishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveEstablishmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
