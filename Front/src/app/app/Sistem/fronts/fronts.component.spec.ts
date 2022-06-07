import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontsComponent } from './fronts.component';

describe('FrontsComponent', () => {
  let component: FrontsComponent;
  let fixture: ComponentFixture<FrontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
