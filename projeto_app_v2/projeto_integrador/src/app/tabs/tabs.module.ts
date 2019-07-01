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
      { path: 'epis', loadChildren: '../epis/epis.module#EpisPageModule' },
      { path: 'ferramentas', loadChildren: '../ferramentas/ferramentas.module#FerramentasPageModule' },
      { path: 'historico', loadChildren: '../historico/historico.module#HistoricoPageModule' }
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
