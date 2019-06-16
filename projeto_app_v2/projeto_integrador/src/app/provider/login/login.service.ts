import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class LoginService {

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }

  public singIn(user: string, password: string){
    let obj = {
      user : user,
      password : password,
    };

    return this.http.post('http://192.168.15.168:3000/login', obj )
      .map((res : Response) => res.json());
  }
}
