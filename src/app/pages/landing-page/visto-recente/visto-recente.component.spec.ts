import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistoRecenteComponent } from './visto-recente.component';

describe('VistoRecenteComponent', () => {
  let component: VistoRecenteComponent;
  let fixture: ComponentFixture<VistoRecenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistoRecenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistoRecenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
