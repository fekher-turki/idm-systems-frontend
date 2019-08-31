import { TestBed } from '@angular/core/testing';

import { ClientTypeService } from './client-type.service';

describe('ClientTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientTypeService = TestBed.get(ClientTypeService);
    expect(service).toBeTruthy();
  });
});
