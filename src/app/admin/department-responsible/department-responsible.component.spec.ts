import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentResponsibleComponent } from './department-responsible.component';

describe('DepartmentResponsibleComponent', () => {
  let component: DepartmentResponsibleComponent;
  let fixture: ComponentFixture<DepartmentResponsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentResponsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
