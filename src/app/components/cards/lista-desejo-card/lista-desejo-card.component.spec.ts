import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesejoCardComponent } from './lista-desejo-card.component';

describe('ListaDesejoCardComponent', () => {
  let component: ListaDesejoCardComponent;
  let fixture: ComponentFixture<ListaDesejoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDesejoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDesejoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
