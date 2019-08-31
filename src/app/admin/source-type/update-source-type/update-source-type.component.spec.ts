import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSourceTypeComponent } from './update-source-type.component';

describe('UpdateSourceTypeComponent', () => {
  let component: UpdateSourceTypeComponent;
  let fixture: ComponentFixture<UpdateSourceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSourceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
