import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahpaketPage } from './tambahpaket.page';

describe('TambahpaketPage', () => {
  let component: TambahpaketPage;
  let fixture: ComponentFixture<TambahpaketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahpaketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahpaketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
