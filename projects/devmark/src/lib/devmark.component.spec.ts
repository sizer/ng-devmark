import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevmarkComponent } from './devmark.component';

describe('DevmarkComponent', () => {
  let component: DevmarkComponent;
  let fixture: ComponentFixture<DevmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
