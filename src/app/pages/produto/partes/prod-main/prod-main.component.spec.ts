import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdMainComponent } from './prod-main.component';

describe('ProdMainComponent', () => {
  let component: ProdMainComponent;
  let fixture: ComponentFixture<ProdMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
