import { TestBed, inject } from '@angular/core/testing';

import { MyOrdersLibService } from './my-orders-lib.service';

describe('MyOrdersLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyOrdersLibService]
    });
  });

  it('should be created', inject([MyOrdersLibService], (service: MyOrdersLibService) => {
    expect(service).toBeTruthy();
  }));
});
