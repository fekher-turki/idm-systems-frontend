import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTypeComponent } from './source-type.component';

describe('SourceTypeComponent', () => {
  let component: SourceTypeComponent;
  let fixture: ComponentFixture<SourceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
