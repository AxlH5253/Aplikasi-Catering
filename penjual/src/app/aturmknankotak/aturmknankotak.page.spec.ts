import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AturmknankotakPage } from './aturmknankotak.page';

describe('AturmknankotakPage', () => {
  let component: AturmknankotakPage;
  let fixture: ComponentFixture<AturmknankotakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AturmknankotakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AturmknankotakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
