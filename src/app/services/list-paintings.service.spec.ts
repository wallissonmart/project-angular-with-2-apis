import { TestBed } from '@angular/core/testing';

import { ListPaintingsService } from './list-paintings.service';

describe('ListPaintingsService', () => {
  let service: ListPaintingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPaintingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
