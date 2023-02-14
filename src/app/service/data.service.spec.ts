import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]

    });
    service = TestBed.inject(DataService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  })
