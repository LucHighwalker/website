import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueifyComponent } from './blueify.component';

describe('BlueifyComponent', () => {
  let component: BlueifyComponent;
  let fixture: ComponentFixture<BlueifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
