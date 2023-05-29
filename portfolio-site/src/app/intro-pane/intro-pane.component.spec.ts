import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPaneComponent } from './intro-pane.component';

describe('IntroPaneComponent', () => {
  let component: IntroPaneComponent;
  let fixture: ComponentFixture<IntroPaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroPaneComponent]
    });
    fixture = TestBed.createComponent(IntroPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
