import { TestBed } from '@angular/core/testing';

import { ApproverGuardService } from './approver-guard.service';

describe('ApproverGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApproverGuardService = TestBed.get(ApproverGuardService);
    expect(service).toBeTruthy();
  });
});
