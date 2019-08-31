import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTeamComponent } from './source-team.component';

describe('SourceTeamComponent', () => {
  let component: SourceTeamComponent;
  let fixture: ComponentFixture<SourceTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
