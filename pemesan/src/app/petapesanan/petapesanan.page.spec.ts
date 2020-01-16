import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetapesananPage } from './petapesanan.page';

describe('PetapesananPage', () => {
  let component: PetapesananPage;
  let fixture: ComponentFixture<PetapesananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetapesananPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetapesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
