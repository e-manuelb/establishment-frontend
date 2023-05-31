import { TestBed } from '@angular/core/testing';

import { ViewEstablishmentService } from './view-establishment.service';

describe('ViewEstablishmentService', () => {
  let service: ViewEstablishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewEstablishmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
