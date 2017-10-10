import { FamilyDetailsPage } from './../family-details/family-details';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
@Component({selector: 'page-family', templateUrl: 'family.html'})
export class FamilyPage {
  items;
  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.items = [
      {
        id: 1,
        title: "عائلة الراجحي",
        text: "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      }, {
        id: 2,
        title: "شجرة العائلة",
        text: "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      }, {
        id: 3,
        title: "مجلس العائلة",
        text: "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      }, {
        id: 4,
        title: "صندوق العائلة",
        text: "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      }, {
        id: 5,
        title: "لجان العائلة",
        text: "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
  }
  goToDetail(item){
    this.navCtrl.push(FamilyDetailsPage,item)
  }

}
