import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path:'menu',
    loadChildren: './menu/menu.module#MenuPageModule'
    // canActivate: [AuthGuard]
  },
  { path: 'servicos', loadChildren: './lista-servico/lista-servico.module#ListaServicoPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },

 



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
