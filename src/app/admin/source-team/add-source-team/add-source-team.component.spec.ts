import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSourceTeamComponent } from './add-source-team.component';

describe('AddSourceTeamComponent', () => {
  let component: AddSourceTeamComponent;
  let fixture: ComponentFixture<AddSourceTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSourceTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSourceTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
