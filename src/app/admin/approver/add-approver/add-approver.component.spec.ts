import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApproverComponent } from './add-approver.component';

describe('AddApproverComponent', () => {
  let component: AddApproverComponent;
  let fixture: ComponentFixture<AddApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
