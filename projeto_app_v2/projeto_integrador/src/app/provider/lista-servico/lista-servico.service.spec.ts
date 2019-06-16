import { TestBed } from '@angular/core/testing';

import { ListaServicoService } from './lista-servico.service';

describe('ListaServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaServicoService = TestBed.get(ListaServicoService);
    expect(service).toBeTruthy();
  });
});
