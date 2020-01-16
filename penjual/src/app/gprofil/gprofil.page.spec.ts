import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GprofilPage } from './gprofil.page';

describe('GprofilPage', () => {
  let component: GprofilPage;
  let fixture: ComponentFixture<GprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GprofilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
