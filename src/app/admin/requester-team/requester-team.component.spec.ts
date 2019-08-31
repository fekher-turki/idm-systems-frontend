import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterTeamComponent } from './requester-team.component';

describe('RequesterTeamComponent', () => {
  let component: RequesterTeamComponent;
  let fixture: ComponentFixture<RequesterTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesterTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
