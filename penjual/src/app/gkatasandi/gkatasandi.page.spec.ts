import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GkatasandiPage } from './gkatasandi.page';

describe('GkatasandiPage', () => {
  let component: GkatasandiPage;
  let fixture: ComponentFixture<GkatasandiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GkatasandiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GkatasandiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
