import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';




/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor( public httpProvider : HttpProvider) {
    console.log('Hello LoginProvider Provider');
  }
  public singIn(user: string, password: string){
    let obj =  {
      user : user,
      password : password,
    };

    this.httpProvider.url = 'http://localhost:3000/login';
    alert(obj);
    return this.httpProvider.post(obj);
  }

}
