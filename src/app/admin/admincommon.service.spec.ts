import { TestBed } from '@angular/core/testing';

import { AdmincommonService } from './admincommon.service';

describe('AdmincommonService', () => {
  let service: AdmincommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmincommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
