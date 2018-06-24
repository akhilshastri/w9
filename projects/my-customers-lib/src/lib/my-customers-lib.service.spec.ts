import { TestBed, inject } from '@angular/core/testing';

import { MyCustomersLibService } from './my-customers-lib.service';

describe('MyCustomersLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCustomersLibService]
    });
  });

  it('should be created', inject([MyCustomersLibService], (service: MyCustomersLibService) => {
    expect(service).toBeTruthy();
  }));
});
