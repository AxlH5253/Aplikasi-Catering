import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaPage } from './beranda.page';

describe('BerandaPage', () => {
  let component: BerandaPage;
  let fixture: ComponentFixture<BerandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerandaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
