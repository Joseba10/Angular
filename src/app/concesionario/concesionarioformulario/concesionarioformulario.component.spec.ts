import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionarioformularioComponent } from './concesionarioformulario.component';

describe('ConcesionarioformularioComponent', () => {
  let component: ConcesionarioformularioComponent;
  let fixture: ComponentFixture<ConcesionarioformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcesionarioformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcesionarioformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
