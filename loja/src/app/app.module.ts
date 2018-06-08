import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http'
import { ContatoService } from './../services/contato';
import { ProdutoService } from './../services/produto';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ContatoPage } from '../pages/contato/contato'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ItemDetailPage,
    ContatoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ItemDetailPage,
    ContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContatoService,
    ProdutoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
