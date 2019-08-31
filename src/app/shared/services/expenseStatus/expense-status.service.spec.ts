import { TestBed } from '@angular/core/testing';

import { ExpenseStatusService } from './expense-status.service';

describe('ExpenseStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseStatusService = TestBed.get(ExpenseStatusService);
    expect(service).toBeTruthy();
  });
});
