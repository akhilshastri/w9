import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommonLibComponent } from './my-common-lib.component';

describe('MyCommonLibComponent', () => {
  let component: MyCommonLibComponent;
  let fixture: ComponentFixture<MyCommonLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCommonLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
