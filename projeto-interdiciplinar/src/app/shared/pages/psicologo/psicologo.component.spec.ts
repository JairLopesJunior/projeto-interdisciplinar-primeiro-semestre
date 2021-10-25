import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologoComponent } from './psicologo.component';

describe('PsicologoComponent', () => {
  let component: PsicologoComponent;
  let fixture: ComponentFixture<PsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
