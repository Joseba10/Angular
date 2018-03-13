import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetarioDetalleComponent } from './recetario-detalle.component';

describe('RecetarioDetalleComponent', () => {
  let component: RecetarioDetalleComponent;
  let fixture: ComponentFixture<RecetarioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetarioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
