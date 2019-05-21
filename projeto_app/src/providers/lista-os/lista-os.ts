import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaOsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaOsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ListaOsProvider Provider');
  }

}
