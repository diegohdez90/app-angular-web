import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionDetalleComponent } from './coleccion-detalle.component';

describe('ColeccionDetalleComponent', () => {
  let component: ColeccionDetalleComponent;
  let fixture: ComponentFixture<ColeccionDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeccionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
