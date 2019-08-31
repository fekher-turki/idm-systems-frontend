import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSourceTeamComponent } from './update-source-team.component';

describe('UpdateSourceTeamComponent', () => {
  let component: UpdateSourceTeamComponent;
  let fixture: ComponentFixture<UpdateSourceTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSourceTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSourceTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
