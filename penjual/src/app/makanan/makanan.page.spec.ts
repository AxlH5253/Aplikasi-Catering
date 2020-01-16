import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakananPage } from './makanan.page';

describe('MakananPage', () => {
  let component: MakananPage;
  let fixture: ComponentFixture<MakananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakananPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
