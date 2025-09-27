import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselMarcaComponent } from './carrossel-marca.component';

describe('CarrosselComponent', () => {
  let component: CarrosselMarcaComponent;
  let fixture: ComponentFixture<CarrosselMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselMarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
