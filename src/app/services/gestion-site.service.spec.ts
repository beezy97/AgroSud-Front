import { TestBed } from '@angular/core/testing';

import { GestionSiteService } from './gestion-site.service';

describe('GestionSiteService', () => {
  let service: GestionSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
