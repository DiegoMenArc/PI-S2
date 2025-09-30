import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditComponent } from './adm-edit.component';

describe('AdmEditComponent', () => {
  let component: AdmEditComponent;
  let fixture: ComponentFixture<AdmEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
