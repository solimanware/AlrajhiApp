import { FamilyDetailsPage } from './../pages/family-details/family-details';
import { ProjectsPage } from './../pages/projects/projects';
import { NewsPage } from './../pages/news/news';
import { FamilyPage } from './../pages/family/family';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjectProvider } from '../providers/project/project';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ListPage,
    FamilyPage,
    NewsPage,
    ProjectsPage,
    FamilyDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ListPage,
    FamilyPage,
    NewsPage,
    ProjectsPage,
    FamilyDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjectProvider
  ]
})
export class AppModule {}
