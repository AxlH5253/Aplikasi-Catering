import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TampilprofilPage } from './tampilprofil.page';

describe('TampilprofilPage', () => {
  let component: TampilprofilPage;
  let fixture: ComponentFixture<TampilprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TampilprofilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TampilprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
