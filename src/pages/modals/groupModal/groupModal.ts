import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { groupPrivacyOption } from '../../../app/enums/groupPrivacyOption';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'GroupModal.html',
})
export class GroupModalPage {
  price: number = 0;
  constructor(
    public viewCtrl: ViewController, 
    public loadingCtrl: LoadingController,
    params: NavParams
  ) {}

  newGroupDetails = {
    groupName: '',
    groupDescription: '',
    groupPhoto: '',
    groupPrivacy: groupPrivacyOption.Public,
    groupSubscriptionPrice: 0,
    selectedGroupTags: ["Other"]
  }

  dismissGroupModal() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();
    this.viewCtrl.dismiss();
  }

  exitGroupModal() {
    this.viewCtrl.dismiss();
  }
  
}