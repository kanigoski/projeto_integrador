import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaOsPage } from './lista-os';

@NgModule({
  declarations: [
    ListaOsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaOsPage),
  ],
})
export class ListaOsPageModule {}
