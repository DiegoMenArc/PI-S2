import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdDesejoComponent } from './card-prod-desejo.component';

describe('CardProdDesejoComponent', () => {
  let component: CardProdDesejoComponent;
  let fixture: ComponentFixture<CardProdDesejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProdDesejoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProdDesejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
