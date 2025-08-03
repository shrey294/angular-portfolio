import { TestBed } from '@angular/core/testing';

import { MyworkService } from './mywork.service';

describe('MyworkService', () => {
  let service: MyworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
