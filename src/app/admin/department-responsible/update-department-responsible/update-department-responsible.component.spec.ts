import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartmentResponsibleComponent } from './update-department-responsible.component';

describe('UpdateDepartmentResponsibleComponent', () => {
  let component: UpdateDepartmentResponsibleComponent;
  let fixture: ComponentFixture<UpdateDepartmentResponsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDepartmentResponsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepartmentResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
