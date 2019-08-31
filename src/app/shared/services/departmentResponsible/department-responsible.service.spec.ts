import { TestBed } from '@angular/core/testing';

import { DepartmentResponsibleService } from './department-responsible.service';

describe('DepartmentResponsibleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentResponsibleService = TestBed.get(DepartmentResponsibleService);
    expect(service).toBeTruthy();
  });
});
