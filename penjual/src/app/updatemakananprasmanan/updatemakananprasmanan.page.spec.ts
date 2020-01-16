import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemakananprasmananPage } from './updatemakananprasmanan.page';

describe('UpdatemakananprasmananPage', () => {
  let component: UpdatemakananprasmananPage;
  let fixture: ComponentFixture<UpdatemakananprasmananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemakananprasmananPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemakananprasmananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
