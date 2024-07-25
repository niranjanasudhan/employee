import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  fetchData() :Observable<string>{
    return of('Data from service').pipe(delay(2000));
  }
}
