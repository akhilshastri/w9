import { TestBed, inject } from '@angular/core/testing';

import { MyCommonLibService } from './my-common-lib.service';

describe('MyCommonLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCommonLibService]
    });
  });

  it('should be created', inject([MyCommonLibService], (service: MyCommonLibService) => {
    expect(service).toBeTruthy();
  }));
});
