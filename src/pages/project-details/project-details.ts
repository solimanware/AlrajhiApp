import { ProjectProvider } from './../../providers/project/project';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html',
})
export class ProjectDetailsPage {
projectContent;
project : any;

constructor(public navCtrl : NavController, public navParams : NavParams, private projectProvider:ProjectProvider,private sanitizer:DomSanitizer) {
    this.project = this.navParams.data
    console.log(this.project);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailsPage');
    this.projectProvider.getProjectContent(this.project.id).subscribe(html=>{
      this.projectContent = this.sanitizer.bypassSecurityTrustHtml(html);
    })
  
  }

}
