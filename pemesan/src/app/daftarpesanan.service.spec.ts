import { TestBed } from '@angular/core/testing';

import { DaftarpesananService } from './daftarpesanan.service';

describe('DaftarpesananService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaftarpesananService = TestBed.get(DaftarpesananService);
    expect(service).toBeTruthy();
  });
});
