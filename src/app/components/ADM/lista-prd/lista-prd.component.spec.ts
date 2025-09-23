import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrdComponent } from './lista-prd.component';

describe('ListaPrdComponent', () => {
  let component: ListaPrdComponent;
  let fixture: ComponentFixture<ListaPrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
