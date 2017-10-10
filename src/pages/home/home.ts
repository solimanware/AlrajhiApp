import { ProjectsPage } from './../projects/projects';
import { NewsPage } from './../news/news';
import {FamilyPage} from './../family/family';
import {Component,ViewChild} from '@angular/core';
import {NavController,Slides} from 'ionic-angular';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl : NavController) {
    console.log('home loaded');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
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
  goToEvents(){
    this.navCtrl.push('EventsPage')
  }

}
