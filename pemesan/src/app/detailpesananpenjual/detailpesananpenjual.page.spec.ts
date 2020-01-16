import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpesananpenjualPage } from './detailpesananpenjual.page';

describe('DetailpesananpenjualPage', () => {
  let component: DetailpesananpenjualPage;
  let fixture: ComponentFixture<DetailpesananpenjualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpesananpenjualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpesananpenjualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
