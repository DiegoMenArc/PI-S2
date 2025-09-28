import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrosselMarcaComponent } from './carrossel-marca.component';

describe('CarrosselMarcaComponent', () => {
  let component: CarrosselMarcaComponent;
  let fixture: ComponentFixture<CarrosselMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselMarcaComponent] // standalone usa imports
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosselMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve começar na primeira imagem', () => {
    expect(component.indiceAtual).toBe(0);
    expect(component.imagens[component.indiceAtual]).toBe('assets/img1.jpg');
  });

  it('deve ir para a próxima imagem', () => {
    component.proximo();
    expect(component.indiceAtual).toBe(1);
  });

  it('deve voltar para a imagem anterior', () => {
    component.anterior();
    expect(component.indiceAtual).toBe(component.imagens.length - 1);
  });
});