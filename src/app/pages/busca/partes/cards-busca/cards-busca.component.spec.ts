import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBuscaComponent } from './cards-busca.component';

describe('CardsBuscaComponent', () => {
  let component: CardsBuscaComponent;
  let fixture: ComponentFixture<CardsBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsBuscaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
