import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding1Component } from './data-binding1.component';

describe('DataBinding1Component', () => {
  let component: DataBinding1Component;
  let fixture: ComponentFixture<DataBinding1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBinding1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
