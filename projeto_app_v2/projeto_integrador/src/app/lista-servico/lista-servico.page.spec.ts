import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServicoPage } from './lista-servico.page';

describe('ListaServicoPage', () => {
  let component: ListaServicoPage;
  let fixture: ComponentFixture<ListaServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaServicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
