import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  projects;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projects = [
      {
        logo: "assets/img/logos/tawthiq.png",
        title: "التوثيق العائلي",
        brief:"تعريف بالعائلة، تاريخ العائلة"

      },
      {
        logo: "assets/img/logos/ga2ezah.png",
        title: "جائزة الراجحي للتفوق",
        brief:"تعريف بالعائلة، تاريخ العائلة"

      },
      {
        logo: "assets/img/logos/esla7.png",
        title: "الاصلاح العائلي",
        brief:"تعريف بالعائلة، تاريخ العائلة"

      },
      {
        logo: "assets/img/logos/re3ayah.png",
        title: "رعاية",
        brief:"تعريف بالعائلة، تاريخ العائلة"

      },
      {
        logo: "assets/img/logos/eskan.png",
        title: "الاسكان العائلي",
        brief:"تعريف بالعائلة، تاريخ العائلة"

      },
      {
        logo: "assets/img/logos/bayt.png",
        title: "بيت العائلة",
        brief:"تعريف بالعائلة، تاريخ العائلة"

      },
      {
        logo: "assets/img/logos/khebra.png",
        title: "خبرة",
        brief:"تعريف بالعائلة، تاريخ العائلة"
      },
      {
        logo: "assets/img/logos/olfah.png",
        title: "تيسير الزواج",
        brief:"تعريف بالعائلة، تاريخ العائلة"
      },
      {
        logo: "assets/img/logos/entaj.png",
        title: "الانتاج العلمي",
        brief:"تعريف بالعائلة، تاريخ العائلة"
      },
      {
        logo: "assets/img/logos/maqsoratrawaje7.png",
        title: "مقصورة الرواجح",
        brief:"تعريف بالعائلة، تاريخ العائلة"
      },
      {
        logo: "assets/img/logos/qot.png",
        title: "منتجعات قوت",
        brief:"تعريف بالعائلة، تاريخ العائلة"
      },
      {
        logo: "assets/img/logos/maqsorate7tefal.png",
        title: "المقصورة للاحتفالات",
        brief:"تعريف بالعائلة، تاريخ العائلة"
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

}
