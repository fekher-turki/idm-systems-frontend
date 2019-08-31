import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRequesterTeamComponent } from './update-requester-team.component';

describe('UpdateRequesterTeamComponent', () => {
  let component: UpdateRequesterTeamComponent;
  let fixture: ComponentFixture<UpdateRequesterTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRequesterTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRequesterTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
