/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SvgServiceService } from './svgService.service';

describe('Service: SvgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgServiceService]
    });
  });

  it('should ...', inject([SvgServiceService], (service: SvgServiceService) => {
    expect(service).toBeTruthy();
  }));
});
