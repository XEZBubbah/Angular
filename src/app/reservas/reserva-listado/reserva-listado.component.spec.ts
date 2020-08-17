import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaListadoComponent } from './reserva-listado.component';

describe('ReservaListadoComponent', () => {
  let component: ReservaListadoComponent;
  let fixture: ComponentFixture<ReservaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
