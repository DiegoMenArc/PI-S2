import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacoesProdComponent } from './especificacoes-prod.component';

describe('EspecificacoesProdComponent', () => {
  let component: EspecificacoesProdComponent;
  let fixture: ComponentFixture<EspecificacoesProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecificacoesProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificacoesProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
