import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ClientData } from './client-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }

getClients():Observable<ClientData[]>
{
  return this.http.get<ClientData[]>('https://random-data-api.com/api/users/random_user?size=10').pipe(
    catchError(err=>
      {
        throw err;
      })
  )
}
}
