import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselprodComponent } from './carrosselprod.component';

describe('CarrosselprodComponent', () => {
  let component: CarrosselprodComponent;
  let fixture: ComponentFixture<CarrosselprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselprodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
