import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { RequesterComponent } from './requester.component';
import { RequesterModule } from './requester.module';

describe('RequesterComponent', () => {
  let component: RequesterComponent;
  let fixture: ComponentFixture<RequesterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RequesterModule,
          RouterTestingModule,
          TranslateModule.forRoot(),
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
