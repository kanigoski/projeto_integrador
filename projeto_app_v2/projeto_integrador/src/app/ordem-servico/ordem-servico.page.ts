import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaServicoService } from '../provider/lista-servico/lista-servico.service';

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.page.html',
  styleUrls: ['./ordem-servico.page.scss'],
})
export class OrdemServicoPage implements OnInit {
  codeOrdem: any;
  serviceValue : any[];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(public activatedRoute : ActivatedRoute, public services: ListaServicoService) { }

  ngOnInit() {
    this.codeOrdem = this.activatedRoute.snapshot.paramMap.get('id');
    this.getServiceOrder();
  }

  getServiceOrder() {
    this.services.getServiceOrdem(this.codeOrdem).subscribe((result) => {
      this.serviceValue = result.results;
    });
  }
}
