import { TestBed } from '@angular/core/testing';

import { RequesterTeamService } from './requester-team.service';

describe('RequesterTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequesterTeamService = TestBed.get(RequesterTeamService);
    expect(service).toBeTruthy();
  });
});
