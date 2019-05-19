import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProvider } from '../api-login/api-login';




/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(private http : HttpProvider) {
    console.log('Hello LoginProvider Provider');
  }

  public login (username : string, password : string){
    let obj = {
      userName : username,
      password : password
    }
      this.http.url = 'http://localhost:3000/login'
    return this.http.post(obj);

  }

}
