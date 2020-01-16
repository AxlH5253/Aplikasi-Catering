import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TampilpetapesanPage } from './tampilpetapesan.page';

describe('TampilpetapesanPage', () => {
  let component: TampilpetapesanPage;
  let fixture: ComponentFixture<TampilpetapesanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TampilpetapesanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TampilpetapesanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
