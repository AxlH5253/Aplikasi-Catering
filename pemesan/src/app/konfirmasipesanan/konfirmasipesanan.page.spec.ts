import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfirmasipesananPage } from './konfirmasipesanan.page';

describe('KonfirmasipesananPage', () => {
  let component: KonfirmasipesananPage;
  let fixture: ComponentFixture<KonfirmasipesananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonfirmasipesananPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfirmasipesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
