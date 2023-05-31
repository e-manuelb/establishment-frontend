import { TestBed } from '@angular/core/testing';

import { SaveEmployeeService } from './save-employee.service';

describe('SaveEmployeeService', () => {
  let service: SaveEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
