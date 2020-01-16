import { TestBed } from '@angular/core/testing';

import { LogininfoService } from './logininfo.service';

describe('LogininfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogininfoService = TestBed.get(LogininfoService);
    expect(service).toBeTruthy();
  });
});
