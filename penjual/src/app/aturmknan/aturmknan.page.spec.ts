import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AturmknanPage } from './aturmknan.page';

describe('AturmknanPage', () => {
  let component: AturmknanPage;
  let fixture: ComponentFixture<AturmknanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AturmknanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AturmknanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
