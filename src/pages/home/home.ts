import { ProjectsPage } from './../projects/projects';
import { NewsPage } from './../news/news';
import {FamilyPage} from './../family/family';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  constructor(public navCtrl : NavController) {
    console.log('home loaded');
  }
  goToFamily(){
    console.log('clicked');
    this.navCtrl.push(FamilyPage)
  }
  goToNews(){
    console.log('clicked');
    this.navCtrl.push(NewsPage)
  }
  goToProjects(){
    console.log('clicked');
    this.navCtrl.push(ProjectsPage)
  }

}
