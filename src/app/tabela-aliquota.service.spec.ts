import { TestBed } from '@angular/core/testing';

import { TabelaAliquotaService } from './tabela-aliquota.service';

describe('TabelaAliquotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabelaAliquotaService = TestBed.get(TabelaAliquotaService);
    expect(service).toBeTruthy();
  });
});
