import { TestBed } from '@angular/core/testing';

import { ItemsPageService } from './items-page.service';

describe('ItemsPageService', () => {
  let service: ItemsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
