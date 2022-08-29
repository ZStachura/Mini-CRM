/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { ApiService } from './Api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Api', () => {
  let injector:TestBed;
  let service:ApiService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports:[HttpClientTestingModule]
    });
    injector=getTestBed();
    service=injector.get(ApiService);
    httpMock=injector.get(HttpTestingController)
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getClients function',()=>{
    // GIVEN
    const service:ApiService=TestBed.get(ApiService);
    // THEN 
    expect(service.getClients).toBeTruthy();
  });

  it('should return an Observable<ClientData[]>',()=>{
    const dummyClients=[
      {
        first_name:'Alizent',
        last_name:'Hightower',
        email:'ahightower@a.com'
      },
      {
        first_name:'John',
        last_name:'Doe',
        email:'jdoe@a.com'
      }
    ];

    service.getClients().subscribe(users=>{
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyClients);
    });

    const req=httpMock.expectOne('https://random-data-api.com/api/users/random_user?size=10');
    expect(req.request.method).toBe('GET');
    req.flush(dummyClients)
  })
});
