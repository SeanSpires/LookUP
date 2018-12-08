import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PostService } from '../../../app/services/post.service';

@IonicPage()
@Component({
  selector: 'page-selected-post-modal',
  templateUrl: 'selected-post-modal.html',
})
export class SelectedPostModalPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public postService: PostService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectedPostModalPage');
  }

  exitSelectedPostModal(){
    this.viewCtrl.dismiss();
  }

}
