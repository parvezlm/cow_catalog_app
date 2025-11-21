import { TestBed } from '@angular/core/testing';

import { Cow } from './cow';

describe('Cow', () => {
  let service: Cow;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cow);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
