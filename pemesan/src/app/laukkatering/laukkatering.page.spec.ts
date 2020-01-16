import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaukkateringPage } from './laukkatering.page';

describe('LaukkateringPage', () => {
  let component: LaukkateringPage;
  let fixture: ComponentFixture<LaukkateringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaukkateringPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaukkateringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
