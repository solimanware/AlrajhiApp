import { ListPage } from './../list/list';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ListPage;
  tab3Root: any = ListPage;

  constructor() {

  }
}