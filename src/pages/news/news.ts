import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = [
      {
        img:"assets/img/newsholder.jpg",
        title:"نص الخبر الرئيسي",
        body:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        img:"assets/img/newsholder.jpg",
        title:"نص الخبر الرئيسي",
        body:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        img:"assets/img/newsholder.jpg",
        title:"نص الخبر الرئيسي",
        body:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        img:"assets/img/newsholder.jpg",
        title:"نص الخبر الرئيسي",
        body:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        img:"assets/img/newsholder.jpg",
        title:"نص الخبر الرئيسي",
        body:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        img:"assets/img/newsholder.jpg",
        title:"نص الخبر الرئيسي",
        body:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        img:"assets/img/newsholder.jpg",
        title:"نص الخبر الرئيسي",
        body:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
      {
        img:"assets/img/newsholder.jpg",
        title:"نص الخبر الرئيسي",
        body:"هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ"
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
