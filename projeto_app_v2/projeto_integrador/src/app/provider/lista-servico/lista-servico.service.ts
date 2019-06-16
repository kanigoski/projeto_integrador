import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ListaServicoService {

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }

  public getAllOrdem(situacao) {
    const obj = {
      situacao : situacao,
    }
    return this.http.get(`http://192.168.15.168:3000/ordem/${situacao}` )
      .map((res : Response) => res.json());
  }

  public getServiceOrdem(codigo) {
    const obj = {
      codigo : codigo,
    }
    return this.http.get(`http://192.168.15.168:3000/ordem/servico/${codigo}` )
      .map((res : Response) => res.json());
  }
}
