import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequesterTeamComponent } from './add-requester-team.component';

describe('AddRequesterTeamComponent', () => {
  let component: AddRequesterTeamComponent;
  let fixture: ComponentFixture<AddRequesterTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRequesterTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequesterTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
