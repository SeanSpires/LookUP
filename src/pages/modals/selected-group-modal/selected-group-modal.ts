import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GroupService } from '../../../app/services/group.service';

/**
 * Generated class for the SelectedGroupModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selected-group-modal',
  templateUrl: 'selected-group-modal.html',
})
export class SelectedGroupModalPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public groupService: GroupService,
              public viewCtrl: ViewController,
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectedGroupModalPage');
  }

  exitSelectedGroupModal(){
      this.viewCtrl.dismiss();
  }

}
