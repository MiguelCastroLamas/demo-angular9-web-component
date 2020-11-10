import { TestBed } from '@angular/core/testing';

import { HelloNameService } from './hello-name.service';

describe('HelloNameService', () => {
  let service: HelloNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
