import { TestBed } from '@angular/core/testing';

import { ListEmployeesService } from './list-employees.service';

describe('ListEmployeesService', () => {
  let service: ListEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
