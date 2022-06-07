import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFrontComponent } from './update-front.component';

describe('UpdateFrontComponent', () => {
  let component: UpdateFrontComponent;
  let fixture: ComponentFixture<UpdateFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
