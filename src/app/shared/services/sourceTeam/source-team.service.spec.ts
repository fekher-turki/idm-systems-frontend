import { TestBed } from '@angular/core/testing';

import { SourceTeamService } from './source-team.service';

describe('SourceTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceTeamService = TestBed.get(SourceTeamService);
    expect(service).toBeTruthy();
  });
});
