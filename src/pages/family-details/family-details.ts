import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-family-details',
  templateUrl: 'family-details.html',
})
export class FamilyDetailsPage {
  detail;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detail = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyDetailsPage');
    console.log(this.navParams.data);
  }

}
