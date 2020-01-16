import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpesananPage } from './dpesanan.page';

describe('DpesananPage', () => {
  let component: DpesananPage;
  let fixture: ComponentFixture<DpesananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpesananPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
