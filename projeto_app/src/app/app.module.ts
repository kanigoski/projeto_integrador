import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { HttpProvider } from '../providers/http/http';
import { LoginPage } from '../pages/login/login';
import { ListaOsPage } from '../pages/lista-os/lista-os';
import { ModalOsPage } from '../pages/modal-os/modal-os';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ListaOsProvider } from '../providers/lista-os/lista-os';
import { TabSecundarioPage } from '../pages//tab-secundario/tab-secundario';
import { HttpModule } from '@angular/http';
//import { ToastProvider } from '../providers/toast/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ListaOsPage,
    ModalOsPage,
    DashboardPage,
    TabSecundarioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ListaOsPage,
    ModalOsPage,
    DashboardPage,
    TabSecundarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    HttpProvider,
    ListaOsProvider
  ]
})
export class AppModule {}
