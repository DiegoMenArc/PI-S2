import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselOfertasComponent } from './carrossel-ofertas.component';

describe('CarrosselOfertasComponent', () => {
  let component: CarrosselOfertasComponent;
  let fixture: ComponentFixture<CarrosselOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselOfertasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
