import { TestBed, inject } from '@angular/core/testing';

import { ReportDbService } from './report-db.service';

describe('ReportDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportDbService]
    });
  });

  it('should be created', inject([ReportDbService], (service: ReportDbService) => {
    expect(service).toBeTruthy();
  }));
});
