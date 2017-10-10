import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({selector: 'page-projects', templateUrl: 'projects.html'})
export class ProjectsPage {
  projects;

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.projects = [
      {
        id: 1,
        title: "التوثيق العائلي",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectTawthiqPage'

      }, {
        id: 2,
        title: "جائزة الراجحي للتفوق",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectGaezaPage'

      }, {
        id: 3,
        title: "الاصلاح العائلي",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectEslahPage'

      }, {
        id: 4,
        title: "رعاية",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectReayahPage'

      }, {
        id: 5,
        title: "الاسكان العائلي",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectEskanPage'

      }, {
        id: 6,
        title: "بيت العائلة",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectBaytPage'

      }, {
        id: 7,
        title: "خبرة",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectKhebraPage'
      }, {
        id: 8,
        title: "تيسير الزواج",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectZawajPage'
      }, {
        id: 9,
        title: "الانتاج العلمي",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectEntajPage'
      }, {
        id: 10,
        title: "مقصورة الرواجح",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectMaqsoratrwajehPage'
      }, {
        id: 11,
        title: "منتجعات قوت",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectQoutPage'
      }, {
        id: 12,
        title: "المقصورة للاحتفالات",
        brief: "تعريف بالعائلة، تاريخ العائلة",
        page: 'ProjectMaqsoratehtehtifalPage'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

  goToProject(project){
    this.navCtrl.push('ProjectDetailsPage',project)
  }

}
