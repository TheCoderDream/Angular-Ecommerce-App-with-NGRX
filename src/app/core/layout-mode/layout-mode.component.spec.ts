import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutModeComponent } from './layout-mode.component';

describe('LayoutModeComponent', () => {
  let component: LayoutModeComponent;
  let fixture: ComponentFixture<LayoutModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
