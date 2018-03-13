import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { StartPage } from '../pages/start/start';
import { ClientPage } from '../pages/client/client';
import { TicketsPage } from '../pages/tickets/tickets';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SimpleTimer } from 'ng2-simple-timer';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    TabsPage,
	StartPage,
	ClientPage,
	TicketsPage,
	RegisterPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
      AngularFontAwesomeModule,
      Ng2SearchPipeModule,
      Ng2OrderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    TabsPage,
	StartPage,
	ClientPage,
	TicketsPage,
	RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
      SimpleTimer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
