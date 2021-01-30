import { TestBed } from '@angular/core/testing';

import { PaticipantsService } from './paticipants.service';

describe('PaticipantsService', () => {
  let service: PaticipantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaticipantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
