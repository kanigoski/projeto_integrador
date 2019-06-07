import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';

@Injectable()
export class ListaOsProvider {

  constructor(public httpProvider : HttpProvider) {
    console.log('Hello ListaOsProvider Provider');
  }

  getServicesOrder() {
    this.httpProvider.url = 'http://localhost:3000/ordem';
    return this.httpProvider.get();
  }

  getServicesOrderById(id) {
    this.httpProvider.url = `http://localhost:3000/ordem/${id}`;
    return this.httpProvider.get();
  }

}
