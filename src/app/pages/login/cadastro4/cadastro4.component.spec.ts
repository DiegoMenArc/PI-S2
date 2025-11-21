import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro4Component } from './cadastro4.component';

describe('Cadastro4Component', () => {
  let component: Cadastro4Component;
  let fixture: ComponentFixture<Cadastro4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadastro4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadastro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
