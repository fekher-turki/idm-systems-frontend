import { TestBed } from '@angular/core/testing';

import { SourceTypeService } from './source-type.service';

describe('SourceTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceTypeService = TestBed.get(SourceTypeService);
    expect(service).toBeTruthy();
  });
});
