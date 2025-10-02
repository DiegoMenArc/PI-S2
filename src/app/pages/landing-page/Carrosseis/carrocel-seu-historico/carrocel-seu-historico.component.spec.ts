import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocelSeuHistoricoComponent } from './carrocel-seu-historico.component';

describe('CarrocelSeuHistoricoComponent', () => {
  let component: CarrocelSeuHistoricoComponent;
  let fixture: ComponentFixture<CarrocelSeuHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrocelSeuHistoricoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocelSeuHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
