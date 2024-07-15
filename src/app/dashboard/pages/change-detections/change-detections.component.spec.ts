import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionsComponent } from './change-detections.component';

describe('ChangeDetectionsComponent', () => {
  let component: ChangeDetectionsComponent;
  let fixture: ComponentFixture<ChangeDetectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
