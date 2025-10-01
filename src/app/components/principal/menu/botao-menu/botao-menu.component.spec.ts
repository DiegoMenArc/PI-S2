import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMenuComponent } from './botao-menu.component';

describe('BotaoMenuComponent', () => {
  let component: BotaoMenuComponent;
  let fixture: ComponentFixture<BotaoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoMenuComponent] // se for standalone, usa imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
