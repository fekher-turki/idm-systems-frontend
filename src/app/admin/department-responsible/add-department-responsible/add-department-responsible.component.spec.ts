import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentResponsibleComponent } from './add-department-responsible.component';

describe('AddDepartmentResponsibleComponent', () => {
  let component: AddDepartmentResponsibleComponent;
  let fixture: ComponentFixture<AddDepartmentResponsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDepartmentResponsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmentResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
