import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      { path: 'servico/:id', loadChildren: '../ordem-servico/ordem-servico.module#OrdemServicoPageModule' },
      { path: 'epis/:id', loadChildren: '../epis/epis.module#EpisPageModule' },
      { path: 'ferramentas/:id', loadChildren: '../ferramentas/ferramentas.module#FerramentasPageModule' },
      { path: 'historico/:id', loadChildren: '../historico/historico.module#HistoricoPageModule' }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
