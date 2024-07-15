import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsTransitionComponent } from './views-transition.component';

describe('ViewsTransitionComponent', () => {
  let component: ViewsTransitionComponent;
  let fixture: ComponentFixture<ViewsTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsTransitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
