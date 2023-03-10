import { TestBed } from '@angular/core/testing';

import { HttpHeaderUtil } from './http-header.service';

describe('HttpHeaderService', () => {
  let service: HttpHeaderUtil;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHeaderUtil);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
