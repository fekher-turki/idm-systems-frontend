import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverTeamComponent } from './approver-team.component';

describe('ApproverTeamComponent', () => {
  let component: ApproverTeamComponent;
  let fixture: ComponentFixture<ApproverTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
