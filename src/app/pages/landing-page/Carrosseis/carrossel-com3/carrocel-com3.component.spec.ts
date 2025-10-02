import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocelCom3Component } from './carrocel-com3.component';

describe('CarrocelCom3Component', () => {
  let component: CarrocelCom3Component;
  let fixture: ComponentFixture<CarrocelCom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrocelCom3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocelCom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
