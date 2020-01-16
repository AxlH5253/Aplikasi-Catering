import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaukkotakPage } from './laukkotak.page';

describe('LaukkotakPage', () => {
  let component: LaukkotakPage;
  let fixture: ComponentFixture<LaukkotakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaukkotakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaukkotakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
