import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemakanankotakPage } from './updatemakanankotak.page';

describe('UpdatemakanankotakPage', () => {
  let component: UpdatemakanankotakPage;
  let fixture: ComponentFixture<UpdatemakanankotakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemakanankotakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemakanankotakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
