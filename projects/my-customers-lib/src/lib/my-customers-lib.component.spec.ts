import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomersLibComponent } from './my-customers-lib.component';

describe('MyCustomersLibComponent', () => {
  let component: MyCustomersLibComponent;
  let fixture: ComponentFixture<MyCustomersLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomersLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomersLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
