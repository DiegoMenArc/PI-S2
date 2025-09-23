import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmElementsComponent } from './adm-elements.component';

describe('AdmElementsComponent', () => {
  let component: AdmElementsComponent;
  let fixture: ComponentFixture<AdmElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
