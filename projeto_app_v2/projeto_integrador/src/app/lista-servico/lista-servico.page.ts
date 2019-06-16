import { Component, OnInit } from '@angular/core';
import { ListaServicoService } from '../provider/lista-servico/lista-servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-servico',
  templateUrl: './lista-servico.page.html',
  styleUrls: ['./lista-servico.page.scss'],
})
export class ListaServicoPage implements OnInit {

  listOrder: any[];
  situacao: Number;

  constructor(public services: ListaServicoService, public router: Router) { }

  ngOnInit() {
    this.situacao = 1;
    this.getListService();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getListService()
      event.target.complete();
    }, 2000);
  }

  updateSituacao(value) {
    this.situacao = value;
    this.getListService();
  }

  navigation(item) {
    this.router.navigateByUrl(`/servico/${item.id_ordem_servico}`);
  }
  
  getListService() {
    this.services.getAllOrdem(this.situacao).subscribe((result) => {
      this.listOrder = result.results;
    });
  }
}
