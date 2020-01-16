import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahmakananPage } from './tambahmakanan.page';

describe('TambahmakananPage', () => {
  let component: TambahmakananPage;
  let fixture: ComponentFixture<TambahmakananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahmakananPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahmakananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
