import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpaketPage } from './dpaket.page';

describe('DpaketPage', () => {
  let component: DpaketPage;
  let fixture: ComponentFixture<DpaketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpaketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpaketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
