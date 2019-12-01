import { TestBed } from '@angular/core/testing';

import { TeamServiceService } from './teamservice.service';

describe('TeamserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamServiceService = TestBed.get(TeamServiceService);
    expect(service).toBeTruthy();
  });
});
