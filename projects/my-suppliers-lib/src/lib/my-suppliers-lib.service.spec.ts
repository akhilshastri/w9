import { TestBed, inject } from '@angular/core/testing';

import { MySuppliersLibService } from './my-suppliers-lib.service';

describe('MySuppliersLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySuppliersLibService]
    });
  });

  it('should be created', inject([MySuppliersLibService], (service: MySuppliersLibService) => {
    expect(service).toBeTruthy();
  }));
});
