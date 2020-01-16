import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilihwaktuPage } from './pilihwaktu.page';

describe('PilihwaktuPage', () => {
  let component: PilihwaktuPage;
  let fixture: ComponentFixture<PilihwaktuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihwaktuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilihwaktuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
