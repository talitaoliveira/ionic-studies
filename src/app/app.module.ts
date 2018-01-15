import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPageModule } from '../pages/intro/intro.module';
import { TabsPage } from '../pages/tabs/tabs';
import { ContapagarPage } from '../pages/contapagar/contapagar';
import { ContareceberPage } from '../pages/contareceber/contareceber';
import { ResumoPage } from '../pages/resumo/resumo';
import { RegistrosProvider } from '../providers/registros/registros';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ContapagarPage,
    ContareceberPage,
    ResumoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ContapagarPage,
    ContareceberPage,
    ResumoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegistrosProvider
  ]
})
export class AppModule {}
