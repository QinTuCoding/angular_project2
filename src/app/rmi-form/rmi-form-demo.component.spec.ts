import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmiFormDemoComponent } from './rmi-form-demo.component';

describe('RmiFormComponent', () => {
  let component: RmiFormDemoComponent;
  let fixture: ComponentFixture<RmiFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmiFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmiFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
