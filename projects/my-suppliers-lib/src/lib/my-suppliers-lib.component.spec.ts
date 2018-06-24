import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuppliersLibComponent } from './my-suppliers-lib.component';

describe('MySuppliersLibComponent', () => {
  let component: MySuppliersLibComponent;
  let fixture: ComponentFixture<MySuppliersLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySuppliersLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySuppliersLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
