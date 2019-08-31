import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApproverTeamComponent } from './update-approver-team.component';

describe('UpdateApproverTeamComponent', () => {
  let component: UpdateApproverTeamComponent;
  let fixture: ComponentFixture<UpdateApproverTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApproverTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApproverTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
