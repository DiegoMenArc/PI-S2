import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselMaisAcessadosComponent } from './carrossel-mais-acessados.component';

describe('CarrosselMaisAcessadosComponent', () => {
  let component: CarrosselMaisAcessadosComponent;
  let fixture: ComponentFixture<CarrosselMaisAcessadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselMaisAcessadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselMaisAcessadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
