import { TestBed } from '@angular/core/testing';

import { ListEmployeesWithoutPaginationService } from './list-employees-without-pagination.service';

describe('ListEmployeesWithoutPaginationService', () => {
  let service: ListEmployeesWithoutPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEmployeesWithoutPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
