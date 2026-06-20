import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpleados } from './list-empleados';

describe('ListEmpleados', () => {
  let component: ListEmpleados;
  let fixture: ComponentFixture<ListEmpleados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEmpleados],
    }).compileComponents();

    fixture = TestBed.createComponent(ListEmpleados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
