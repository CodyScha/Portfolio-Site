import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBkgComponent } from './svg-bkg.component';

describe('SvgBkgComponent', () => {
  let component: SvgBkgComponent;
  let fixture: ComponentFixture<SvgBkgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgBkgComponent]
    });
    fixture = TestBed.createComponent(SvgBkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
