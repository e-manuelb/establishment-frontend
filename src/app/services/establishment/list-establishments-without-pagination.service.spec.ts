import { TestBed } from '@angular/core/testing';

import { ListEstablishmentsWithoutPaginationService } from './list-establishments-without-pagination.service';

describe('ListEstablishmentsWithoutPaginationService', () => {
  let service: ListEstablishmentsWithoutPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEstablishmentsWithoutPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
