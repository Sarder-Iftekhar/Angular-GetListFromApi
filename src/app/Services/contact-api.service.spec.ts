import { TestBed } from '@angular/core/testing';

import { ContactApiService } from './contact-api.service';

describe('ContactApiService', () => {
  let service: ContactApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
