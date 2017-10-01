import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title:"عائلة الراجحي",
        text:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        title:"شجرة العائلة",
        text:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        title:"مجلس العائلة",
        text:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        title:"صندوق العائلة",
        text:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        title:"لجان العائلة",
        text:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
  }
  

}
