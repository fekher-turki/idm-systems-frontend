import { TestBed } from '@angular/core/testing';

import { ApproverTeamService } from './approver-team.service';

describe('ApproverTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApproverTeamService = TestBed.get(ApproverTeamService);
    expect(service).toBeTruthy();
  });
});
