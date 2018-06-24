import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersLibComponent } from './my-orders-lib.component';

describe('MyOrdersLibComponent', () => {
  let component: MyOrdersLibComponent;
  let fixture: ComponentFixture<MyOrdersLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
