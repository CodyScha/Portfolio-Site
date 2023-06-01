import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsPaneComponent } from './socials-pane.component';

describe('SocialsPaneComponent', () => {
  let component: SocialsPaneComponent;
  let fixture: ComponentFixture<SocialsPaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialsPaneComponent]
    });
    fixture = TestBed.createComponent(SocialsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
