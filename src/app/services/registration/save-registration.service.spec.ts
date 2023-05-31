import { TestBed } from '@angular/core/testing';

import { SaveRegistrationService } from './save-registration.service';

describe('SaveRegistrationService', () => {
  let service: SaveRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
