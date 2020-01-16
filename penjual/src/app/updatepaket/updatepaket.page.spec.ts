import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepaketPage } from './updatepaket.page';

describe('UpdatepaketPage', () => {
  let component: UpdatepaketPage;
  let fixture: ComponentFixture<UpdatepaketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepaketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepaketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
