import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApproverTeamComponent } from './add-approver-team.component';

describe('AddApproverTeamComponent', () => {
  let component: AddApproverTeamComponent;
  let fixture: ComponentFixture<AddApproverTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApproverTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApproverTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
