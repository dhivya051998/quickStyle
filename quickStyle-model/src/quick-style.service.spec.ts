import { TestBed } from '@angular/core/testing';

import { QuickStyleService } from './quick-style.service';

describe('QuickStyleService', () => {
  let service: QuickStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
